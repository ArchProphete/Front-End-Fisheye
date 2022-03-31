import { createElementToCard } from '../utils/functions.js';

/**
 * Fetch Json files with all datas
 * @returns {Promise<void>}
 */
const getPhotographers = async () => {
    const response = await fetch('/data/photographers.json');
    const data = await response.json();
    const photographers = data.photographers;
    await displayPhotographers(photographers);
};

getPhotographers();

export const displayPhotographers = (photographers) => {
    photographers.map((photographer, index) => {
        displayPhotographer(photographer, index);
    });
};

/**
 * CREATE AND DISPLAY HOME PAGE WITH ALL PHOTOGRAPHERS
 * @param photographer
 * @param index
 */
export const displayPhotographer = (photographer, index) => {
    const elementSectionHeader = createElementToCard('section', null, [
        { attribut: 'id', content: 'photographer_section_' + photographer.id },
    ]);
    const elementA = createElementToCard('a', null, [
        {
            attribut: 'tabindex',
            content: `${index}`,
        },
        {
            attribut: 'href',
            content: `photographer.html?id=${photographer.id}`,
        },
    ]);

    elementA.appendChild(elementSectionHeader);
    document.getElementById('main').appendChild(elementA);

    const elementIMG = createElementToCard('img', null, [
        {
            attribut: 'src',
            content: `/assets/images/Sample%20Photos/Photographers%20ID%20Photos/${photographer.portrait}`,
        },
        { attribut: 'alt', content: photographer.name },
    ]);

    const elementP = createElementToCard('p', photographer.tagline, null);
    const elementH2 = createElementToCard('h2', photographer.name, null);
    const elementH3 = createElementToCard(
        'h3',
        [photographer.city + ', ' + photographer.country],
        null
    );

    const elementSPAN = createElementToCard(
        'span',
        photographer.price + '€/jour',
        null
    );
    const elementFIGCAPTION = createElementToCard('figcaption', null, null);
    const elementFIGURE = createElementToCard('figure', null, null);
    const elementARTICLE = createElementToCard('article', null, null);

    elementFIGCAPTION.append(elementH2, elementH3, elementP, elementSPAN);
    elementFIGURE.append(elementIMG, elementFIGCAPTION);

    elementARTICLE.appendChild(elementFIGURE);
    elementSectionHeader.appendChild(elementARTICLE);
};
