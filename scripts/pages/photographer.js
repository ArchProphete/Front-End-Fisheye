// TODO Documentation

//recupérer l'id  dans l'url
const urlParsed = new URL(window.location.href)
idFromUrl = urlParsed.searchParams.get("id")

const getPhotographer = async (idFromUrl) => {
    const response = await fetch('/data/photographers.json');
    const data = await response.json();
    displayPhotographer(data, idFromUrl)
    // displayMedias(medias, photographers);
}

getPhotographer(idFromUrl); // passer l'id de l'url
// création de display photographer


const displayPhotographer = (data, idFromUrl) => {

    const photographerlist = data.photographers;
    console.log(photographerlist)

    const idFind = photographerlist.find((photographer) => photographer.id === 243)
    console.log(idFind)

    displayPhotographerHeader(idFind)
    /**
     if (idFind == null) {
        console.log("Pas D'id correspondant")
    } else {
        window.location.href = "/Front-End-Fisheye/index.html"
    }
     */

}

const displayPhotographerHeader = (idFind) => {
    const section = document.getElementById('header_section')

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

    const setAttr = (element, attr) => {
        attr.map(val => element.setAttribute(val.attribut, val.content));
    }

    const elementH1 = createElementToCard('h1', idFind.name, null)
    const elementH2 = createElementToCard('H2', [idFind.city + ', ' + idFind.country], null)
    const elementP = createElementToCard('P', idFind.tagline, null)

    const elementLabel = createElementToCard('label', null, null)

    elementLabel.appendChild(elementH1);
    elementLabel.appendChild(elementH2);
    elementLabel.appendChild(elementP);

    section.appendChild(elementLabel)

    const elementButton = createElementToCard('button', 'Contactez-moi',
        [{ attribut: 'class', content: 'contact_button' }])
    elementButton.setAttribute('onclick', 'displayModal()')

    const elementDiv = createElementToCard('div', null,
        [{attribut: 'class', content: 'photograph-header'}])

    const elementMain = createElementToCard('main', null, [{
        attribut: 'id', content: 'main' }])

    elementDiv.appendChild(elementButton)
    elementMain.appendChild(elementDiv)

    section.appendChild(elementMain)
    const elementIMG = createElementToCard('img', null, null)

    elementIMG.setAttribute('src',
        '/assets/images/Sample%20Photos/Photographers%20ID%20Photos/' + idFind.portrait
    )

    section.appendChild(elementIMG)
}

const displayMedia = (media, photographer) => {

    let section = document.getElementById('gallery')

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
        [{ attribut: "src", content: media.image }]
    );

    elementIMG.setAttribute('src',
        photographer.id == media.id ? `/assets/images/Sample%20Photos/${photographer.name}/${media.image}` : ''
    )

    const elementP = createElementToCard(
        'p',
        media.title,
        null,
    );

    const elementSPAN = createElementToCard(
        'span',
        media.likes,
        null,
    )

    const elementI = createElementToCard(
        'figcaption',
        null,
        [{ attribut: "class", content: "fas fa-heart" }],
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
    elementFIGCAPTION.appendChild(elementP);
    elementFIGCAPTION.appendChild(elementI);
    elementFIGCAPTION.appendChild(elementSPAN);

    elementFIGURE.appendChild(elementIMG);
    elementFIGURE.appendChild(elementFIGCAPTION);

    elementARTICLE.appendChild(elementFIGURE);

    section.appendChild(elementARTICLE);

}