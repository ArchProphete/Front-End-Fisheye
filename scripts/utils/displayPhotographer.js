const displayPhotographer = (data, idFromUrl) => {
    const idFind = data.photographers.find((photographer) => photographer.id == idFromUrl)
    displayPhotographerHeader(idFind)

    const mediaIds = data.media.filter((media) => media.photographerId == idFromUrl);

    let tests = mediaIds.map((media) => {
        displayMedia(media, idFind);
        let arrayMediaId = media.map((test)=> test.id)
        console.log(arrayMediaId)
        // ajout au tableau d'objet afin dit stocker le media
    });



    //debugger;
    const medias = document.querySelectorAll(".media");

    medias.forEach((media) => {
        media.addEventListener('click', (e) => {
            displayLightBox(media, idFind);
        });
    });
}