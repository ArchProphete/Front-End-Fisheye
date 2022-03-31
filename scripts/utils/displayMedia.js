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
            {
                attribut: 'src',
                content: `/assets/images/Sample%20Photos/${photographer.name}/${mediaData.image}`,
            },
            { attribut: 'alt', content: mediaData.title },
            { attribut: 'data-id', content: `${mediaData.id}` },
            { attribut: 'class', content: `media` },
        ]);

        elementFIGURE.appendChild(elementMedia);
    } else if (mediaData.video) {
        const elementMedia = createElementToCard('video', null, [
            {
                attribut: 'src',
                content: `/assets/images/Sample%20Photos/${photographer.name}/${mediaData.video}`,
            },
            { attribut: 'data-id', content: `${mediaData.id}` },
            { attribut: 'class', content: `media` },
        ]);

        elementFIGURE.appendChild(elementMedia);
    }

    const elementP = createElementToCard(
        'p',
        `${mediaData.title ? mediaData.title : ''}`,
        null
    );

    const elementSPAN = createElementToCard('span', `${mediaData.likes}`, null);
    const elementI = createElementToCard('i', null, [
        { attribut: 'class', content: 'fas fa-heart' },
    ]);
    const elementDiv = createElementToCard('div', null, null);

    const elementFIGCAPTION = createElementToCard('figcaption', null, null);
    const elementARTICLE = createElementToCard('article', null, null);

    elementI.addEventListener('click', () => {
        const blockSpanHearth = document.getElementById('span-heart');
        console.log(blockSpanHearth.value);
        elementSPAN.innerHTML = mediaData.likes + 1;
        blockSpanHearth.textContent++;
    });

    // Inject element from children to his parents
    elementDiv.append(elementSPAN, elementI);
    elementFIGCAPTION.append(elementP, elementDiv);
    elementFIGURE.appendChild(elementFIGCAPTION);
    elementARTICLE.appendChild(elementFIGURE);
    mediaSection.appendChild(elementARTICLE);
};
