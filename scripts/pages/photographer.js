// Récupération des données des photographes du json et conversion pour les rendre exploitables
async function getPhotographer(index) {
    const resultat = await fetch ("data/photographers.json")
    const photographers = await resultat.json()
    const photographer = photographers.photographers[index]
    return photographer
}

// Récupération des données médias du json et conversion pour les rendre exploitables
async function getMedias(photographer) {
    const resultatMedias = await fetch ("data/photographers.json")
    let medias = await resultatMedias.json()
    medias = medias.media

    // Balayge de chaque media du tableau à la recherche des medias souhaités
    medias.forEach(media => {
        // Si le photographerId de chaque media = à l'Id du photographe
        if (media.photographerId == photographer.id) {
            // Alors on affiche le media sur la page dans la section .photograph-medias
            const photographerMedias = document.querySelector(".photograph-medias");
            // Récupération de chaque media en le faisant passer dans la MediasFactory
            // La Factory va définir s'il s'agit d'une image ou vidéo
            const photographerMedia = new MediasFactory(media);
            // Mise en forme de chaque média dans le DOM
            const mediaCardDOM = photographerMedia.getMediaCardDOM();
            photographerMedias.appendChild(mediaCardDOM);
        } 
    });
}

// Création de l'encard donnée du photographe .photograph-header
async function init(photographerId){
    const photographer = await getPhotographer(photographerId);
    const medias = await getMedias(photographer);
    
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
}

const photographerId = new URLSearchParams(window.location.search).get("index");

init(photographerId);