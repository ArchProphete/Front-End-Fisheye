import { addOneLike, createElementToCard } from '../utils/functions.js';
import { displayLightBox } from './displayLightbox.js';

/**
 * CREATE AND DISPLAY EVERY MEDIA OF A PHOTOGRAPHER
 * @param mediaData
 * @param photographer
 * @param selectType
 */
export const displayMedia = (mediaData, photographer, selectType) => {
    const mediaSection = document.getElementById('medias');
    const elementFIGURE = createElementToCard('figure', null, null);
    let elementMedia;

    if (mediaData.image) {
        elementMedia = createElementToCard('img', null, [
            {
                attribut: 'src',
                content: `/assets/images/Sample%20Photos/${photographer.name}/${mediaData.image}`,
            },
            { attribut: 'alt', content: mediaData.title },
            { attribut: 'data-id', content: `${mediaData.id}` },
            { attribut: 'class', content: `media` },
            { attribut: 'tabindex', content: '3' },
        ]);

        elementFIGURE.appendChild(elementMedia);
    } else if (mediaData.video) {
        elementMedia = createElementToCard('video', null, [
            {
                attribut: 'src',
                content: `/assets/images/Sample%20Photos/${photographer.name}/${mediaData.video}`,
            },
            { attribut: 'data-id', content: `${mediaData.id}` },
            { attribut: 'class', content: `media` },
            { attribut: 'tabindex', content: '3' },
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
        { attribut: 'tabindex', content: '3' },
    ]);
    const elementDiv = createElementToCard('div', null, null);
    const elementFIGCAPTION = createElementToCard('figcaption', null, null);
    const elementARTICLE = createElementToCard('article', null, null);

    const blockSpanHearth = document.getElementById('span-heart');

    elementMedia.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            displayLightBox(mediaData.id, photographer, selectType);
        }
    });

    elementI.addEventListener('click', () => {
        addOneLike(blockSpanHearth, elementSPAN, mediaData);
    });

    elementI.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            addOneLike(blockSpanHearth, elementSPAN, mediaData);
        }
    });

    // Inject element from children to his parents
    elementDiv.append(elementSPAN, elementI);
    elementFIGCAPTION.append(elementP, elementDiv);
    elementFIGURE.appendChild(elementFIGCAPTION);
    elementARTICLE.appendChild(elementFIGURE);
    mediaSection.appendChild(elementARTICLE);
};
