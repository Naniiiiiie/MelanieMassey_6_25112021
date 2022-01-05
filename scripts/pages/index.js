async function getPhotographers() {
    const resultat = await fetch ("data/photographers.json")
    const photographers = await resultat.json()
    return photographers
}

async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");
    i = 0;

    photographers.forEach((photographer) => {
        //je passe un deuxième paramètre i
        const photographerModel = new Photographer(photographer,i); 

        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
        i++;
    });
};

async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    displayData(photographers);
};

init();
    