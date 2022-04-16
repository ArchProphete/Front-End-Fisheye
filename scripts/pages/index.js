import { displayPhotographerPresentation } from '../factories/displayPhotographerPresentation.js';
import { fetchAllData } from '../utils/functions.js';

/**
 * Fetch Json files with all datas
 * @returns {Promise<void>}
 */
const getPhotographers = async () => {
    const data = await fetchAllData();
    const photographers = data.photographers;
    displayPhotographers(photographers);
};

getPhotographers();

export const displayPhotographers = (photographers) => {
    photographers.map((photographer) => {
        displayPhotographerPresentation(photographer);
    });
};
