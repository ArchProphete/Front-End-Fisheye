/**
 * Fetch Json files with all datas
 * @returns {Promise<void>}
 */
const getPhotographers = async () => {
    const response = await fetch('/data/photographers.json');
    const data = await response.json();
    const photographers = data.photographers;
    displayPhotographers(photographers);
};

getPhotographers();

const displayPhotographers = (photographers) => {
    photographers.map((photographer) => {
        displayPhotographer(photographer);
    });
};

const displayPhotographer = (photographer) => {
    const elementSectionHeader = createElementToCard('section', null,
        [{ attribut: 'id' , content: 'photographer_section_' + photographer.id}]);
    const elementA = createElementToCard('a', null,
        [{ attribut: 'href', content: `photographer.html?id=${photographer.id}` }]);

    elementA.appendChild(elementSectionHeader);
    document.getElementById('main').appendChild(elementA);

    const elementIMG = createElementToCard(
        'img',
        null,
        [{ attribut: "src", content: photographer.portrait }]
    );

    elementIMG.setAttribute('src',
        '/assets/images/Sample%20Photos/Photographers%20ID%20Photos/' + photographer.portrait
    );

    const elementP = createElementToCard(
        'p',
        photographer.tagline,
        null
    );

    const elementH2 = createElementToCard(
        'h2',
        photographer.name,
        null
    );

    const elementH3 = createElementToCard(
        'h3',
        [photographer.city + ', ' + photographer.country]
    );

    const elementSPAN = createElementToCard(
        'span',
        photographer.price + '€/jour',
        null,
    );

    const elementFIGCAPTION = createElementToCard(
        'figcaption',
        null,
        null,
    );

    const elementFIGURE = createElementToCard(
        'figure',
        null,
        null,
    );

    const elementARTICLE = createElementToCard(
        'article',
        null,
        null,
    );

    elementFIGCAPTION.appendChild(elementH2);
    elementFIGCAPTION.appendChild(elementH3);
    elementFIGCAPTION.appendChild(elementP);
    elementFIGCAPTION.appendChild(elementSPAN);

    elementFIGURE.appendChild(elementIMG);
    elementFIGURE.appendChild(elementFIGCAPTION);

    elementARTICLE.appendChild(elementFIGURE);

    elementSectionHeader.appendChild(elementARTICLE);
}
