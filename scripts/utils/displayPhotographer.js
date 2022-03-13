const displayPhotographer = (data, idFromUrl) => {
    const photographer = data.photographers.find(photographer => photographer.id == idFromUrl)
    displayPhotographerHeader(photographer)

    const mediasData = data.media.filter(media => media.photographerId == idFromUrl);

    const listOfMediaById = getListOfMediaByID(mediasData, photographer)

    let mediaSection = document.getElementById('medias');

    // By default, POPULARITY is selectioned
    let arrayByPopularity = listOfMediaById.sort((a, b) => {
        return b.likes > a.likes ? 1 : b.likes < a.likes ? -1 : 0;
    });
    getMediaAndHisLightboxBySelect(mediaSection, arrayByPopularity, photographer)

    // Select sort by TITRE
    document.getElementById('title').addEventListener('click', () => {
        let arrayByTitle = listOfMediaById.sort((a, b) => {
            if (a.title < b.title) { return -1; }
            if (a.title > b.title) { return 1; }
            return 0;
        });
        getMediaAndHisLightboxBySelect(mediaSection, arrayByTitle, photographer)
    });

    // Select sort by DATE
    document.getElementById('date').addEventListener('click', () => {
        let arrayByDate = listOfMediaById.sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
        });
        getMediaAndHisLightboxBySelect(mediaSection, arrayByDate, photographer)
    });

    // Select sort by POPULARITY
    document.getElementById('popularity').addEventListener('click', () => {
        let arrayByPopularity = listOfMediaById.sort((a, b) => {
            return b.likes > a.likes ? 1 : b.likes < a.likes ? -1 : 0;
        });
        getMediaAndHisLightboxBySelect(mediaSection, arrayByPopularity, photographer)
    });
}


