import { createElementToCard } from './functions.js';

export const displayMedia = (media, photographer) => {
    let mediaSection = document.getElementById('medias');

    const elementFIGURE = createElementToCard('figure', null, null);

    if (media.image) {
        const elementMedia = createElementToCard('img', null, [
            { attribut: 'src', content: media.image },
        ]);

        elementMedia.setAttribute(
            'src',
            `/assets/images/Sample%20Photos/${photographer.name}/${media.image}`
        );

        elementMedia.classList.add('media');

        elementMedia.setAttribute('data-id', `${media.id}`);
        elementFIGURE.appendChild(elementMedia);
    } else if (media.video) {
        const elementMedia = createElementToCard('video', null, [
            { attribut: 'controls' },
        ]);

        elementMedia.setAttribute(
            'src',
            `/assets/images/Sample%20Photos/${photographer.name}/${media.video}`
        );

        elementMedia.classList.add('media');

        elementMedia.setAttribute('data-id', `${media.id}`);
        elementFIGURE.appendChild(elementMedia);
    }

    const elementP = createElementToCard('p', media.title, null);

    const elementSPAN = createElementToCard('span', media.likes, null);

    const elementI = createElementToCard('i', null, [
        { attribut: 'class', content: 'fas fa-heart' },
    ]);

    const elementFIGCAPTION = createElementToCard('figcaption', null, null);

    const elementARTICLE = createElementToCard('article', null, null);
    /**
     * Inject element from children to his parents
     */
    elementFIGCAPTION.appendChild(elementP);
    elementFIGCAPTION.appendChild(elementSPAN);
    elementSPAN.appendChild(elementI);

    elementFIGURE.appendChild(elementFIGCAPTION);

    elementARTICLE.appendChild(elementFIGURE);

    mediaSection.appendChild(elementARTICLE);
};
