const displayLightBox = (media, idFind) => {
    // LIGHTBOX CREATION
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

    if (media.image) {
        const elementMedia = createElementToCard(
            'img',
            null,
            null
        );
        elementMedia.setAttribute('src',
            `/assets/images/Sample%20Photos/${idFind.name}/${media.image}`
        );
        elementLightBox.appendChild(elementMedia);
    } else if (media.video) {
        const elementMedia = createElementToCard(
            'video',
            null,
            [{attribut: 'controls'}],
        );
        elementMedia.setAttribute('src',
            `/assets/images/Sample%20Photos/${idFind.name}/${media.video}`
            );
        elementLightBox.appendChild(elementMedia);
    }

    elementLightBox.appendChild(elementCloseButton);
    elementLightBox.appendChild(elementNextButton);
    elementLightBox.appendChild(elementPrevButton);

    // LIGHTBOX CONTROL
    const closeLightbox = document.getElementById("lightbox__close");
    const nextButton = document.getElementById("lightbox__next");
    const prevButton = document.getElementById("lightbox__prev");

    elementLightBox.style.display = "block";

    closeLightbox.addEventListener('click', () => {
        elementLightBox.style.display = "none";
    });

    nextButton.addEventListener('click', () => {
        console.log("photo Suivante");
    });

    prevButton.addEventListener('click', () => {
        console.log("photo Précédente");
    });
}