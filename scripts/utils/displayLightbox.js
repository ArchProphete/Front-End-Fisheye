const displayLightBox = (media_id, photographer, listOfMediaById) => {
    console.log(media_id)
    console.log(photographer)
    console.log(listOfMediaById)
    // LIGHTBOX CREATION
    let mediaIndex = mediaIndexFunc(listOfMediaById, media_id);
    let mediaObject = mediaObjectFunc(listOfMediaById, media_id);

    const elementLightBox = document.getElementById("lightbox");

    const elementCloseButton = createElementToCard(
        'button',
        null,
        [{ attribut: 'id', content: 'lightbox__close' }]
    );

    const elementNextButton = createElementToCard(
        'button',
        null,
        [{ attribut: 'id', content: 'lightbox__next' }]
    );

    const elementPrevButton = createElementToCard(
        'button',
        null,
        [{ attribut: 'id', content: 'lightbox__prev' }]
    );

    let prevId = getPrevId(listOfMediaById, mediaIndex);
    let nextId = getNextId(listOfMediaById, mediaIndex);

    elementPrevButton.setAttribute('data-id', prevId);
    elementNextButton.setAttribute('data-id', nextId);

    let elementIMG;
    let elementVIDEO;

    if (mediaObject.image) {
        elementIMG = createElementToCard(
            'img',
            null,
            null
        );
        elementIMG.setAttribute('src',
            `/assets/images/Sample%20Photos/${photographer.name}/${mediaObject.image}`
        );
        elementIMG.setAttribute('id', 'media_lightbox');
        elementLightBox.appendChild(elementIMG);

    } else if (mediaObject.video) {
        elementVIDEO = createElementToCard(
            'video',
            null,
            [{ attribut: 'controls' }]
        );
        elementVIDEO.setAttribute('src',
            `/assets/images/Sample%20Photos/${photographer.name}/${mediaObject.video}`
        );
        elementVIDEO.setAttribute('id', 'media_lightbox');
        elementLightBox.appendChild(elementVIDEO);
    }

    const elementP = createElementToCard(
        'p',
        `${mediaObject.title}`,
        [{attribut: 'id', content: 'title-paragraph'}]
    );


    elementLightBox.appendChild(elementCloseButton);
    elementLightBox.appendChild(elementNextButton);
    elementLightBox.appendChild(elementPrevButton);
    elementLightBox.appendChild(elementP);

    // LIGHTBOX CONTROL
    const closeLightbox = document.getElementById("lightbox__close");
    const nextButton = document.getElementById("lightbox__next");
    const prevButton = document.getElementById("lightbox__prev");

    elementLightBox.style.display = "block";

    closeLightbox.addEventListener('click', () => {
        elementLightBox.style.display = "none";
        elementLightBox.innerHTML = '';
    });

    let mediaLightBox = document.getElementById('media_lightbox');

    prevButton.addEventListener('click', (previousEvent) => {
        media_id = previousEvent.target.dataset.id;

        imgOrVideo(mediaObject, photographer, mediaLightBox);
        getCurrentIdAndChangeDataset(listOfMediaById, media_id);
    });

    nextButton.addEventListener('click', (nextEvent) => {
        media_id = nextEvent.target.dataset.id;

        imgOrVideo(mediaObject, photographer, mediaLightBox);
        getCurrentIdAndChangeDataset(listOfMediaById, media_id);
    });





}
