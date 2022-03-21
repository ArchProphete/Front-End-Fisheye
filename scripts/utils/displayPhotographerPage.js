import { displaySelect } from './displaySelect.js';
import { displayPhotographerHeader } from '../pages/photographer.js';
import { getListOfMediaByID, selectControl } from './functions.js';
import { displayBlockHeartAndPrice } from './displayBlockHeartAndPrice.js';

/**
 * DISPLAY Photographer page with his header and his media
 * @param data
 * @param idFromUrl
 */
export const displayPhotographerPage = (data, idFromUrl) => {
    const photographer = data.photographers.find(
        (photographer) => photographer.id == idFromUrl
    );
    displayPhotographerHeader(photographer);
    const mediasData = data.media.filter(
        (media) => media.photographerId == idFromUrl
    );
    displaySelect(mediasData);

    const listOfMediaById = getListOfMediaByID(mediasData, photographer);
    displayBlockHeartAndPrice(mediasData, photographer);

    let mediaSection = document.getElementById('medias');

    selectControl(mediaSection, photographer, listOfMediaById);
};
