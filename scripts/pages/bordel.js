


const getPhotographers = async() => {
    const response = await fetch('/data/photographers.json');
    const data = response.json();
    console.log(data);
}
getPhotographers();






async function getPhotographers() {

    let datas;
    const fetchData = async () => {
        await fetch('/data/photographers.json')
        .then(response => response.json())
        .then((res) => {
            return res;

            res.map((photographer) => {
                const photographers = [
                    {
                        "name": photographer.name,
                        "id": photographer.id,
                        "city": photographer.city,
                        "country": photographer.country,
                        "tagline": photographer.tagline,
                        "price": photographer.price,
                        "portrait": photographer.portrait
                    }
                ]
            })
        }).then((photographers) => {
                return photographers
            }

});
}

const showDatas = async () => {
    const test = await fetchData();
    const data = await test;
    console.log(data);


            const photographers = fetchData()
            // et bien retourner le tableau photographers seulement une fois
            return ({
                photographers: [...photographers, ...photographers, ...photographers]
            })
}
showDatas();

}


async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
};


async function init() {
    // Récupère les datas des photographes
    const photographers = await getPhotographers();
    //displayData(photographers);
};

init();


async function getPhotographers() {
    // Penser à remplacer par les données récupérées dans le json
    fetch('/data/photographers.json')
    .then(response => response.json())
    .then(photographers => {
        photographers.map((photographer) => {
            let toto = [
                {
                    "name": photographer.name,
                    "id": photographer.id,
                    "city": photographer.city,
                    "country": photographer.country,
                    "tagline": photographer.tagline,
                    "price": photographer.price,
                    "portrait": photographer.portrait
                }
            ]
        })
    })
    .then((tata) => {
        return tata
    })
    .catch(error => console.log(error))
}

async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
};

async function init() {
    // Récupère les datas des photographes
    const photographers = await getPhotographers();
    displayData(photographers);


};

init();

