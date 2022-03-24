import { createElementToCard } from './functions.js';

/**
 * CREATE AND DISPLAY EVERY MEDIA OF A PHOTOGRAPHER
 * @param mediaData
 * @param photographer
 */
export const displayMedia = (mediaData, photographer) => {
    const mediaSection = document.getElementById('medias');

    const elementFIGURE = createElementToCard('figure', null, null);

    if (mediaData.image) {
        const elementMedia = createElementToCard('img', null, [
            { attribut: 'src', content: mediaData.image },
        ]);

        elementMedia.setAttribute(
            'src',
            `/assets/images/Sample%20Photos/${photographer.name}/${mediaData.image}`
        );

        elementMedia.classList.add('media');

        elementMedia.setAttribute('data-id', `${mediaData.id}`);
        elementFIGURE.appendChild(elementMedia);
    } else if (mediaData.video) {
        const elementMedia = createElementToCard('video', null, [
            { attribut: 'controls' },
        ]);

        elementMedia.setAttribute(
            'src',
            `/assets/images/Sample%20Photos/${photographer.name}/${mediaData.video}`
        );

        elementMedia.classList.add('media');

        elementMedia.setAttribute('data-id', `${mediaData.id}`);
        elementFIGURE.appendChild(elementMedia);
    }

    const elementP = createElementToCard('p', mediaData.title, null);
    const elementSPAN = createElementToCard('span', mediaData.likes, null);
    const elementI = createElementToCard('i', null, [
        { attribut: 'class', content: 'fas fa-heart' },
    ]);
    const elementFIGCAPTION = createElementToCard('figcaption', null, null);
    const elementARTICLE = createElementToCard('article', null, null);

    elementI.addEventListener('click', () => {
        const blockSpanHearth = document.getElementById('span-heart');
        console.log(blockSpanHearth.value);
        elementSPAN.innerHTML = mediaData.likes + 1;
        blockSpanHearth.textContent++;
    });

    // Inject element from children to his parents
    elementFIGCAPTION.appendChild(elementP);
    elementFIGCAPTION.appendChild(elementSPAN);
    elementSPAN.appendChild(elementI);

    elementFIGURE.appendChild(elementFIGCAPTION);

    elementARTICLE.appendChild(elementFIGURE);

    mediaSection.appendChild(elementARTICLE);
};
