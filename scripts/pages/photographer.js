import { createElementToCard } from '../utils/functions.js';
import { displayPhotographerPage } from '../utils/displayPhotographerPage.js';
import { displayContactform } from '../utils/displayContactform.js';

const urlParsed = new URL(window.location.href);
const idFromUrl = urlParsed.searchParams.get('id');

const getPhotographer = async (idFromUrl) => {
    const response = await fetch('/data/photographers.json');
    const data = await response.json();
    await displayPhotographerPage(data, idFromUrl);
};

getPhotographer(idFromUrl);

export const displayPhotographerHeader = (idFind) => {
    const section = document.getElementById('header_section');

    const elementH1 = createElementToCard('h1', idFind.name, null);
    const elementH2 = createElementToCard(
        'H2',
        [idFind.city + ', ' + idFind.country],
        null
    );
    const elementP = createElementToCard('P', idFind.tagline, null);

    const elementLabel = createElementToCard('label', null, null);
    elementLabel.appendChild(elementH1);
    elementLabel.appendChild(elementH2);
    elementLabel.appendChild(elementP);

    section.appendChild(elementLabel);

    const elementButton = createElementToCard('button', 'Contactez-moi', [
        { attribut: 'class', content: 'contact_button' },
    ]);

    // DISPLAY Contact Form onClick
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
    const elementIMG = createElementToCard('img', null, null);

    elementIMG.setAttribute(
        'src',
        `/assets/images/Sample%20Photos/Photographers%20ID%20Photos/${idFind.portrait}`
    );
    section.appendChild(elementIMG);
};
