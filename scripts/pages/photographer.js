import { displayPhotographerPage } from '../factories/displayPhotographerPage.js';
import { fetchAllData } from '../utils/functions.js';

// Get the url content
const urlParsed = new URL(window.location.href);
// Parse and get the id value
const idFromUrl = urlParsed.searchParams.get('id');

const getPhotographer = async (idFromUrl) => {
    const data = await fetchAllData();
    await displayPhotographerPage(data, idFromUrl);
};

getPhotographer(idFromUrl);
