async function getPhotographer(index) {
    const resultat = await fetch ("data/photographers.json")
    const photographers = await resultat.json()
    const photographer = photographers.photographers[index]
    return photographer
}

async function getMedias(photographer) {
    console.log(photographer)
    const resultatMedias = await fetch ("data/photographers.json")
    let medias = await resultatMedias.json()
    medias = medias.media

    // Balayge du tableau à la recherche des medias souhaités
    medias.forEach(media => {
        if (media.photographerId == photographer) {
        
        }
    });
}

async function init(photographerId){
    const photographer = await getPhotographer(photographerId);
    const medias = await getMedias(photographer.id);
    
    /**insérer infos photographe**/
    //Création d'un <div> avant <button> de contact pour Nom, City, Tagline
    const photographHeader = document.querySelector(".photograph-header");
    const contactButton = document.querySelector(".contact_button");
    const photographerHeaderDiv = document.createElement('div');
    photographHeader.insertBefore(photographerHeaderDiv, contactButton);

    const h2 = document.createElement('h2');
    h2.textContent = photographer.name;
    const h3 = document.createElement('h3');
    h3.textContent = photographer.city + ', ' + photographer.country;
    const h4 = document.createElement('h4');
    h4.textContent = photographer.tagline;

    photographerHeaderDiv.appendChild(h2);
    photographerHeaderDiv.appendChild(h3);
    photographerHeaderDiv.appendChild(h4);

    console.log(photographerHeaderDiv)

    //Création d'une <img> après <button> de contact
    const picture = `assets/photographers/${photographer.portrait}`;
    const img = document.createElement('img');
    img.setAttribute("src", picture);
    photographHeader.appendChild(img);

    /*Insérer Médias*/

}

const photographerId = new URLSearchParams(window.location.search).get("index");

init(photographerId);