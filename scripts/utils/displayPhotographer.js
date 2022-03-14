const displayPhotographer = (data, idFromUrl) => {
    const photographer = data.photographers.find(photographer => photographer.id == idFromUrl);
    displayPhotographerHeader(photographer);

    const mediasData = data.media.filter(media => media.photographerId == idFromUrl);
    const listOfMediaById = getListOfMediaByID(mediasData, photographer);

    let mediaSection = document.getElementById('medias');

    selectControl(mediaSection, photographer, listOfMediaById);
}


