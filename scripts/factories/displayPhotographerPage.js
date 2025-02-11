import { displaySelect } from './displaySelect.js';
import { selectControl } from '../utils/functions.js';
import { displayBlockHeartAndPrice } from './displayBlockHeartAndPrice.js';
import { displayPhotographerHeader } from './displayPhotographerHeader.js';

/**
 * DISPLAY PHOTOGRAPHER PAGE
 * @param allData
 * @param idFromUrl
 */
export const displayPhotographerPage = (allData, idFromUrl) => {
    // Find photographer by id in url
    const photographer = allData.photographers.find(
        (photographer) => photographer.id == idFromUrl
    );

    // Filter all data to get media by photographer
    const mediasOfAPhotographer = allData.media.filter(
        (media) => media.photographerId == idFromUrl
    );

    const mediaSection = document.getElementById('medias');

    displayPhotographerHeader(photographer);
    displaySelect();
    displayBlockHeartAndPrice(mediasOfAPhotographer, photographer);
    selectControl(mediaSection, photographer, mediasOfAPhotographer);
};
