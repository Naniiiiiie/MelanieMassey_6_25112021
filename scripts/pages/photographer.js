async function getPhotographer(index) {
    const resultat = await fetch ("data/photographers.json")
    const photographers = await resultat.json()
    const photographer = photographers.photographers[index]
    return photographer
}

async function init(photographerId){
    const photographer = await getPhotographer(photographerId);
    console.log(photographer);

    //insérer infos photographe
}

const photographerId = new URLSearchParams(window.location.search).get("index");

init(photographerId);