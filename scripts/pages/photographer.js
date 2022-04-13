import { createElementToCard } from '../utils/functions.js';
import { displayPhotographerPage } from '../utils/displayPhotographerPage.js';
import { displayContactform } from '../utils/displayContactform.js';

// Get the url content
const urlParsed = new URL(window.location.href);
// Parse and get the id value
const idFromUrl = urlParsed.searchParams.get('id');

const getPhotographer = async (idFromUrl) => {
    const response = await fetch('/data/photographers.json');
    const data = await response.json();
    await displayPhotographerPage(data, idFromUrl);
};

getPhotographer(idFromUrl);

/**
 * CREATE AND DISPLAY HEADER OF A PHOTOGRAPHER
 * @param idFind
 */
export const displayPhotographerHeader = (idFind) => {
    const section = document.getElementById('header_section');

    const elementH1 = createElementToCard('h1', idFind.name, [
        { attribut: 'arial-label', content: idFind.name },
    ]);
    const elementH2 = createElementToCard(
        'h2',
        [idFind.city + ', ' + idFind.country],
        [{ attribut: 'arial-label', content: idFind.country }]
    );
    const elementP = createElementToCard('p', idFind.tagline, [
        {
            attribut: 'arial-label',
            content: idFind.tagline,
        },
    ]);
    const elementLabel = createElementToCard('label', null, null);

    elementLabel.append(elementH1, elementH2, elementP);
    section.appendChild(elementLabel);

    const elementButton = createElementToCard('button', 'Contactez-moi', [
        { attribut: 'class', content: 'contact_button' },
        { attribut: 'aria-label', content: 'Contactez-moi' },
        { attribut: 'tabindex', content: '2' },
    ]);

    // DISPLAY CONTACT FORM
    elementButton.addEventListener('click', () => displayContactform(idFind));

    const elementDiv = createElementToCard('div', null, [
        { attribut: 'class', content: 'photograph-header' },
    ]);
    const elementMain = createElementToCard('main', null, [
        { attribut: 'id', content: 'main' },
    ]);
    elementDiv.appendChild(elementButton);
    elementMain.appendChild(elementDiv);

    section.appendChild(elementMain);
    const elementIMG = createElementToCard('img', null, [
        {
            attribut: 'src',
            content: `/assets/images/Sample%20Photos/Photographers%20ID%20Photos/${idFind.portrait}`,
        },
        { attribut: 'alt', content: idFind.name },
    ]);

    section.appendChild(elementIMG);
};
