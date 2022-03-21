import { displaySelect } from './displaySelect.js';
import { displayPhotographerHeader } from '../pages/photographer.js';
import { getListOfMediaByID, selectControl } from './functions.js';

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
    displaySelect();
    const mediasData = data.media.filter(
        (media) => media.photographerId == idFromUrl
    );

    const listOfMediaById = getListOfMediaByID(mediasData, photographer);

    let mediaSection = document.getElementById('medias');

    selectControl(mediaSection, photographer, listOfMediaById);
};
