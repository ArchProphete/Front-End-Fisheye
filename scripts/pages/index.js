/**
 * Fetch Json files with all datas
 * @returns {Promise<void>}
 */
const getPhotographers = async () => {
    const response = await fetch('/data/photographers.json');
    const data = await response.json();
    const photographers = data.photographers;
    displayPhotographers(photographers);
}

getPhotographers();

const displayPhotographers = (photographers) => {

    //TODO A DOCUMENTER
    photographers.map((photographer) => {
        displayPhotographer(photographer);
    });
}

const displayPhotographer = (photographer) => {
    console.log(photographer);
    /**
     * Fetch photographer_section id
     * @type {HTMLElement}
     */
    let section = document.getElementById('photographer_section');

    /**
     * function to create cards used for each tags
     * @param tag name of the tag
     * @param data Data to inject
     * @param attr Call setAttr if you need attribut
     * @returns {*}
     */
    const createElementToCard = (tag, data, attr) => {
        const element = document.createElement(tag);
        if (data) {
            element.innerHTML = data;
        }
        if (attr) {
            setAttr(element, attr)
        }
        return element;
    }

    /**
     * Set attribut if you need it
     * @param element
     * @param attr
     */
    const setAttr = (element, attr) => {
        attr.map(val => element.setAttribute(val.attribut, val.content));
    }

    const elementIMG = createElementToCard(
        'img',
        null,
        [{ attribut: "src", content: photographer.portrait }]
    );

    elementIMG.setAttribute('src',
        '/assets/images/Sample%20Photos/Photographers%20ID%20Photos/' + photographer.portrait
    )

    const elementP = createElementToCard(
        'p',
        photographer.tagline,
        null
    );

    const elementH2 = createElementToCard(
        'h2',
        photographer.name,
        null
    )

    const elementH3 = createElementToCard(
        'h3',
        [photographer.city + ', ' + photographer.country]
    );

    const elementSPAN = createElementToCard(
        'span',
        photographer.price,
        null,
    )
    const elementFIGCAPTION = createElementToCard(
        'figcaption',
        null,
        null,
    )

    const elementFIGURE = createElementToCard(
        'figure',
        null,
        null,
    )

    const elementARTICLE = createElementToCard(
        'article',
        null,
        null,
    )

    /**
     * Inject element from children to his parents
     */
    elementFIGCAPTION.appendChild(elementH2);
    elementFIGCAPTION.appendChild(elementH3);
    elementFIGCAPTION.appendChild(elementP);
    elementFIGCAPTION.appendChild(elementSPAN);

    elementFIGURE.appendChild(elementIMG);
    elementFIGURE.appendChild(elementFIGCAPTION);

    elementARTICLE.appendChild(elementFIGURE);

    section.appendChild(elementARTICLE);
}