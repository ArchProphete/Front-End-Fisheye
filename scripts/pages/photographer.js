// TODO Documentation

//recupérer l'id  dans l'url
const urlParsed = new URL(window.location.href)
idFromUrl = urlParsed.searchParams.get("id")

const getPhotographer = async (idFromUrl) => {
    const response = await fetch('/data/photographers.json');
    const data = await response.json();
    displayPhotographer(data, idFromUrl)
    // displayMedias(medias, photographers);
}

getPhotographer(idFromUrl); // passer l'id de l'url
// création de display photographer


const displayPhotographer = (data, idFromUrl) => {

    const photographerlist = data.photographers;
    const idFind = photographerlist.find((photographer) => photographer.id == idFromUrl)
    displayPhotographerHeader(idFind)

    const mediaList = data.media;
    const mediaIds = mediaList.filter((media) => media.photographerId == idFromUrl);


    mediaIds.map((mediaId) => {
        displayMedia(mediaId, idFind)
    })

    /**
     if (idFind == null) {
        console.log("Pas D'id correspondant")
    } else {
        window.location.href = "/Front-End-Fisheye/index.html"
    }
     */

}

const displayPhotographerHeader = (idFind) => {
    const section = document.getElementById('header_section')

    const elementH1 = createElementToCard('h1', idFind.name, null)
    const elementH2 = createElementToCard('H2', [idFind.city + ', ' + idFind.country], null)
    const elementP = createElementToCard('P', idFind.tagline, null)

    const elementLabel = createElementToCard('label', null, null)

    elementLabel.appendChild(elementH1);
    elementLabel.appendChild(elementH2);
    elementLabel.appendChild(elementP);

    section.appendChild(elementLabel)

    const elementButton = createElementToCard('button', 'Contactez-moi',
        [{ attribut: 'class', content: 'contact_button' }])
    elementButton.setAttribute('onclick', 'displayModal()')

    const elementDiv = createElementToCard('div', null,
        [{ attribut: 'class', content: 'photograph-header' }])

    const elementMain = createElementToCard('main', null, [{
        attribut: 'id', content: 'main'
    }])

    elementDiv.appendChild(elementButton)
    elementMain.appendChild(elementDiv)

    section.appendChild(elementMain)
    const elementIMG = createElementToCard('img', null, null)

    elementIMG.setAttribute('src',
        `/assets/images/Sample%20Photos/Photographers%20ID%20Photos/${idFind.portrait}`
    )

    section.appendChild(elementIMG)
}

const displayMedia = (media, idFind) => {
    let section = document.getElementById('gallery')

    const elementIMG = createElementToCard(
        'img',
        null,
        [{ attribut: "src", content: media.image }]
    );

    elementIMG.setAttribute('src',
        `/assets/images/Sample%20Photos/${idFind.name}/${media.image}`

    )

    const elementP = createElementToCard(
        'p',
        media.title,
        null,
    );

    const elementSPAN = createElementToCard(
        'span',
        media.likes,
        null,
    )

    const elementI = createElementToCard(
        'i',
        null,
        [{ attribut: "class", content: "fas fa-heart" }],
    )

    const elementFIGCAPTION = createElementToCard(
        'figcaption',
        null,
        null,
    )

    const elementFIGURE = createElementToCard(
        'figure',
        null,
        null,
    )

    const elementARTICLE = createElementToCard(
        'article',
        null,
        null,
    )

    /**
     * Inject element from children to his parents
     */
    elementFIGCAPTION.appendChild(elementP);
    elementFIGCAPTION.appendChild(elementSPAN);
    elementFIGCAPTION.appendChild(elementI);


    elementFIGURE.appendChild(elementIMG);
    elementFIGURE.appendChild(elementFIGCAPTION);

    elementARTICLE.appendChild(elementFIGURE);

    section.appendChild(elementARTICLE);

}