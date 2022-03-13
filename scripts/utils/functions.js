/**
 * function to create cards used for each tags
 * @param tag name of the tag
 * @param data Data to inject
 * @param attr Call setAttr if you need attribut
 * @returns {*}
 */
const createElementToCard = (tag, data, attr) => {
    const element = document.createElement(tag);
    if (data) {
        element.innerHTML = data;
    }
    if (attr) {
        setAttr(element, attr)
    }
    return element;
}

/**
 * Set attribut if you need it
 * @param element
 * @param attr
 */
const setAttr = (element, attr) => {
    attr.map(val => element.setAttribute(val.attribut, val.content));
}

/**
 * Find the object of Media selected
 */
const mediaObjectFunc = (listOfMediaById, id) => {
    return listOfMediaById.find((media) => {
        return media.id == id;
    })
};

/**
 * Find current id of media selected
 * @param listOfMediaById
 * @param id
 * @returns {*}
 */
const mediaIndexFunc = (listOfMediaById, id) => {
    return listOfMediaById.findIndex((media) => {
        return media.id == id;
    })
};

/**
 * Get previous id with currend id,
 * If you are in the frst id, next one will be the last
 * @param listOfMediaById
 * @param index
 * @returns {*}
 */
const getPrevId = (listOfMediaById, index) => {
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
const getNextId = (listOfMediaById, index) => {
    let next;
    if (index + 1 > listOfMediaById.length - 1) {
        next = listOfMediaById[0].id;
    } else {
        next = listOfMediaById[parseInt(index) + 1].id;
    }
    return next;
};

/**
 * Return good media and his correct light box by select choice of the user
 * @param mediaSection
 * @param selectType
 * @param mediasSelectors
 * @param photographer
 */
const getMediaAndHisLightboxBySelect = (mediaSection, selectType, mediasSelectors, photographer) => {
    mediaSection.innerHTML = "";
    selectType.map((media) => {
        displayMedia(media, photographer);
    });
    mediasSelectors.forEach((media) => {
        media.addEventListener('click', (e) => {
            displayLightBox(media.dataset.id, photographer, selectType);
        });
    });
}

/**
 *  Get if the Json media is an image or a video and return the good path
 * @param mediaObject
 * @param photographer
 * @param mediaLightBox
 */
const imgOrVideo = (mediaObject, photographer, mediaLightBox) => {
    if (mediaObject.image) {
        mediaLightBox.src = `/assets/images/Sample%20Photos/${photographer.name}/${mediaObject.image}`;
    } else if (mediaObject.video) {
        mediaLightBox.src = `/assets/images/Sample%20Photos/${photographer.name}/${mediaObject.video}`;
    }
}

/**
 * get current id and change next and previous dataset
 * @param listOfMediaById
 * @param media_id
 */
const getCurrentIdAndChangeDataset = (listOfMediaById, media_id) => {
    let currentId = mediaIndexFunc(listOfMediaById, media_id);
    document.getElementById('lightbox__prev').dataset.id = getPrevId(listOfMediaById, currentId);
    document.getElementById('lightbox__next').dataset.id = getNextId(listOfMediaById, currentId);
}
