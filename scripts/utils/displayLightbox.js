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

    const prevId = getPrevId(selectType, mediaIndex);
    const nextId = getNextId(selectType, mediaIndex);

    const elementPrevButton = createElementToCard('button', null, [
        { attribut: 'id', content: 'lightbox__prev' },
        { attribut: 'data-id', content: prevId },
    ]);

    const elementNextButton = createElementToCard('button', null, [
        { attribut: 'id', content: 'lightbox__next' },
        { attribut: 'data-id', content: nextId },
    ]);

    let elementIMG;
    let elementVIDEO;

    if (mediaObject.image) {
        elementIMG = createElementToCard('img', null, [
            {
                attribut: 'src',
                content: `/assets/images/Sample%20Photos/${photographer.name}/${mediaObject.image}`,
            },
            { attribut: 'alt', content: mediaObject.title },
            { attribut: 'id', content: 'media_lightbox' },
        ]);
        elementLightBox.appendChild(elementIMG);
    } else if (mediaObject.video) {
        elementVIDEO = createElementToCard('video', null, [
            {
                attribut: 'src',
                content: `/assets/images/Sample%20Photos/${photographer.name}/${mediaObject.video}`,
            },
            { attribut: 'id', content: 'media_lightbox' },
            { attribut: 'controls' },
        ]);
        elementLightBox.appendChild(elementVIDEO);
    }

    const elementP = createElementToCard('p', `${mediaObject.title}`, [
        { attribut: 'id', content: 'title_lightbox' },
    ]);

    elementLightBox.append(
        elementCloseButton,
        elementNextButton,
        elementPrevButton,
        elementP
    );

    // LIGHTBOX CONTROL
    lightboxControl(selectType, media_id, photographer, elementLightBox);
};
