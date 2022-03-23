import { displaySelect } from './displaySelect.js';
import { displayPhotographerHeader } from '../pages/photographer.js';
import { getListOfMediaByID, selectControl } from './functions.js';
import { displayBlockHeartAndPrice } from './displayBlockHeartAndPrice.js';

/**
 * DISPLAY PHOTOGRAPHER PAGE
 * @param data
 * @param idFromUrl
 */
export const displayPhotographerPage = (data, idFromUrl) => {
    const photographer = data.photographers.find(
        (photographer) => photographer.id == idFromUrl
    );

    const mediasData = data.media.filter(
        (media) => media.photographerId == idFromUrl
    );

    const listOfMediaById = getListOfMediaByID(mediasData, photographer);
    const mediaSection = document.getElementById('medias');

    displayPhotographerHeader(photographer);
    displaySelect(mediasData);
    displayBlockHeartAndPrice(mediasData, photographer);
    selectControl(mediaSection, photographer, listOfMediaById);
};
