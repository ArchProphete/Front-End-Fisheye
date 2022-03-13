const displayLightBox = (media_id, photographer, selectType) => {
    // LIGHTBOX CREATION
    console.log("DISPLAYLIGHTBOX")
    let mediaIndex = mediaIndexFunc(selectType, media_id);
    let mediaObject = mediaObjectFunc(selectType, media_id);

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

    let prevId = getPrevId(selectType, mediaIndex);
    let nextId = getNextId(selectType, mediaIndex);

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
        null
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

    prevButton.addEventListener('click', (eventPrev) => {
        media_id = eventPrev.target.dataset.id;
        let mediaObject = mediaObjectFunc(selectType, media_id);

        imgOrVideo(mediaObject, photographer, mediaLightBox);
        getCurrentIdAndChangeDataset(selectType, media_id);
    });

    nextButton.addEventListener('click', (eventNext) => {
        media_id = eventNext.target.dataset.id;
        let mediaObject = mediaObjectFunc(selectType, media_id);

        imgOrVideo(mediaObject, photographer, mediaLightBox);
        getCurrentIdAndChangeDataset(selectType, media_id);
    });


}
