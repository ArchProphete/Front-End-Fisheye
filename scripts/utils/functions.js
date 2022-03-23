import { displayLightBox } from './displayLightbox.js';
import { displayMedia } from './displayMedia.js';

/**
 * Set attribute if you need it
 * @param element
 * @param attr
 */
export const setAttr = (element, attr) => {
    attr.map((val) => element.setAttribute(val.attribut, val.content));
};

/**
 * function to create cards used for each tags
 * @param tag name of the tag
 * @param data Data to inject
 * @param attr Call setAttr if you need attribut
 * @returns {*}
 */
export const createElementToCard = (tag, data, attr) => {
    const element = document.createElement(tag);
    if (data) {
        element.innerHTML = data;
    }
    if (attr) {
        setAttr(element, attr);
    }
    return element;
};

/**
 * Find the object of Media selected
 */
export const mediaObjectFunc = (listOfMediaById, id) => {
    return listOfMediaById.find((media) => {
        return media.id == id;
    });
};

/**
 * Find current id of media selected
 * @param listOfMediaById
 * @param id
 * @returns {*}
 */
export const mediaIndexFunc = (listOfMediaById, id) => {
    return listOfMediaById.findIndex((media) => {
        return media.id == id;
    });
};

/**
 * Get previous id with current id,
 * If you are in the first id, next one will be the last
 * @param listOfMediaById
 * @param index
 * @returns {*}
 */
export const getPrevId = (listOfMediaById, index) => {
    let prev;
    if (index - 1 < 0) {
        prev = listOfMediaById[parseInt(listOfMediaById.length) - 1].id;
    } else {
        prev = listOfMediaById[parseInt(index) - 1].id;
    }
    return prev;
};

/**
 * Get next id with currend id,
 * If you are in the last id, next one will be the first
 * @param listOfMediaById
 * @param index
 * @returns {*}
 */
export const getNextId = (listOfMediaById, index) => {
    let next;
    if (index + 1 > listOfMediaById.length - 1) {
        next = listOfMediaById[0].id;
    } else {
        next = listOfMediaById[parseInt(index) + 1].id;
    }
    return next;
};

/**
 * get list of media by id and return an array
 * @param mediasData
 * @param photographer
 * @returns {*[]}
 */
export const getListOfMediaByID = (mediasData, photographer) => {
    let listOfMediaById = [];
    mediasData.map((media) => {
        displayMedia(media, photographer);
        listOfMediaById.push(media);
    });
    return listOfMediaById;
};

/**
 * Return good media and his correct light box by select choice of the user
 * @param mediaSection
 * @param selectType
 * @param photographer
 */
export const getMediaAndHisLightboxBySelect = (
    mediaSection,
    selectType,
    photographer
) => {
    mediaSection.innerHTML = '';
    selectType.map((media) => {
        displayMedia(media, photographer);
    });
    const mediasSelectors = document.querySelectorAll('.media');
    mediasSelectors.forEach((media) => {
        media.addEventListener('click', () => {
            displayLightBox(media.dataset.id, photographer, selectType);
        });
    });
};

/**
 *  Get if the Json media is an image or a video and return the good path
 * @param mediaObject
 * @param photographer
 * @param mediaLightBox
 */
export const imgOrVideo = (mediaObject, photographer, mediaLightBox) => {
    if (mediaObject.image) {
        mediaLightBox.src = `/assets/images/Sample%20Photos/${photographer.name}/${mediaObject.image}`;
    } else if (mediaObject.video) {
        mediaLightBox.src = `/assets/images/Sample%20Photos/${photographer.name}/${mediaObject.video}`;
    }
};

/**
 * get current id and change next and previous dataset
 * @param selectType
 * @param media_id
 */
export const getCurrentIdAndChangeDataset = (selectType, media_id) => {
    let currentId = mediaIndexFunc(selectType, media_id);
    document.getElementById('lightbox__prev').dataset.id = getPrevId(
        selectType,
        currentId
    );
    document.getElementById('lightbox__next').dataset.id = getNextId(
        selectType,
        currentId
    );
};

/**
 * If title is undefined, return '' empty
 * @param mediaObject
 */
export const isTitleUndefined = (mediaObject) => {
    if (mediaObject.title) {
        document.getElementById('title_lightbox').innerText = mediaObject.title;
    } else {
        document.getElementById('title_lightbox').innerText = '';
    }
};

/**
 * LIGHTBOX CONTROL
 * @param selectType
 * @param media_id
 * @param photographer
 * @param elementLightBox
 */
export const lightboxControl = (
    selectType,
    media_id,
    photographer,
    elementLightBox
) => {
    const closeLightbox = document.getElementById('lightbox__close');
    const nextButton = document.getElementById('lightbox__next');
    const prevButton = document.getElementById('lightbox__prev');

    elementLightBox.style.display = 'block';
    closeLightbox.addEventListener('click', () => {
        elementLightBox.style.display = 'none';
        elementLightBox.innerHTML = '';
    });

    const mediaLightBox = document.getElementById('media_lightbox');

    const changeImage = (media_id) => {
        const mediaObject = mediaObjectFunc(selectType, media_id);

        imgOrVideo(mediaObject, photographer, mediaLightBox);
        isTitleUndefined(mediaObject);
        getCurrentIdAndChangeDataset(selectType, media_id);
    };

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            const id = document.getElementById('lightbox__next').dataset.id;
            changeImage(id);
        } else if (e.key === 'ArrowLeft') {
            const id = document.getElementById('lightbox__prev').dataset.id;
            changeImage(id);
        }
    });

    prevButton.addEventListener('click', (e) => {
        changeImage(e.target.dataset.id);
    });
    nextButton.addEventListener('click', (e) => {
        changeImage(e.target.dataset.id);
    });
};

/**
 * SELECT CONTROL
 *
 * @param mediaSection
 * @param photographer
 * @param listOfMediaById
 */
export const selectControl = (mediaSection, photographer, listOfMediaById) => {
    // By default, POPULARITY is select
    const arrayByPopularity = listOfMediaById.sort((a, b) => {
        return b.likes > a.likes ? 1 : b.likes < a.likes ? -1 : 0;
    });
    getMediaAndHisLightboxBySelect(
        mediaSection,
        arrayByPopularity,
        photographer
    );

    // Select sort by TITRE
    document.getElementById('title').addEventListener('click', () => {
        const arrayByTitle = listOfMediaById.sort((a, b) => {
            if (a.title < b.title) {
                return -1;
            }
            if (a.title > b.title) {
                return 1;
            }
            return 0;
        });
        getMediaAndHisLightboxBySelect(
            mediaSection,
            arrayByTitle,
            photographer
        );
    });

    // Select sort by DATE
    document.getElementById('date').addEventListener('click', () => {
        const arrayByDate = listOfMediaById.sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
        });
        getMediaAndHisLightboxBySelect(mediaSection, arrayByDate, photographer);
    });

    // Select sort by POPULARITY
    document.getElementById('popularity').addEventListener('click', () => {
        const arrayByPopularity = listOfMediaById.sort((a, b) => {
            return b.likes > a.likes ? 1 : b.likes < a.likes ? -1 : 0;
        });
        getMediaAndHisLightboxBySelect(
            mediaSection,
            arrayByPopularity,
            photographer
        );
    });
};
