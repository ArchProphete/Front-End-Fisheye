import {
    createElementToCard,
    getNextId,
    getPrevId,
    lightboxControl,
    mediaIndexFunc,
    mediaObjectFunc,
} from './functions.js';

/**
 * CREATE, DISPLAY LIGHTBOX AND CALL LIGHTBOX CONTROL
 * @param media_id
 * @param photographer
 * @param selectType
 */
export const displayLightBox = (media_id, photographer, selectType) => {
    const mediaIndex = mediaIndexFunc(selectType, media_id);
    const mediaObject = mediaObjectFunc(selectType, media_id);

    const elementLightBox = document.getElementById('lightbox');

    const elementCloseButton = createElementToCard('button', null, [
        { attribut: 'id', content: 'lightbox__close' },
    ]);

    const elementNextButton = createElementToCard('button', null, [
        { attribut: 'id', content: 'lightbox__next' },
    ]);

    const elementPrevButton = createElementToCard('button', null, [
        { attribut: 'id', content: 'lightbox__prev' },
    ]);

    const prevId = getPrevId(selectType, mediaIndex);
    const nextId = getNextId(selectType, mediaIndex);

    elementPrevButton.setAttribute('data-id', prevId);
    elementNextButton.setAttribute('data-id', nextId);

    let elementIMG;
    let elementVIDEO;

    if (mediaObject.image) {
        elementIMG = createElementToCard('img', null, [
            { attribut: 'alt', content: mediaObject.title },
        ]);
        elementIMG.setAttribute(
            'src',
            `/assets/images/Sample%20Photos/${photographer.name}/${mediaObject.image}`
        );
        elementIMG.setAttribute('id', 'media_lightbox');
        elementLightBox.appendChild(elementIMG);
    } else if (mediaObject.video) {
        elementVIDEO = createElementToCard('video', null, [
            { attribut: 'controls' },
        ]);
        elementVIDEO.setAttribute(
            'src',
            `/assets/images/Sample%20Photos/${photographer.name}/${mediaObject.video}`
        );
        elementVIDEO.setAttribute('id', 'media_lightbox');
        elementLightBox.appendChild(elementVIDEO);
    }

    const elementP = createElementToCard('p', `${mediaObject.title}`, [
        { attribut: 'id', content: 'title_lightbox' },
    ]);

    elementLightBox.appendChild(elementCloseButton);
    elementLightBox.appendChild(elementNextButton);
    elementLightBox.appendChild(elementPrevButton);
    elementLightBox.appendChild(elementP);

    // LIGHTBOX CONTROL
    lightboxControl(selectType, media_id, photographer, elementLightBox);
};
