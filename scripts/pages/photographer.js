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

    let likesArray = []

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
            
            // Ajoute nb likes de chaque media dans tableau likesArray
            likesArray.push(media.likes);
        } 
    });
    
    // Function pour additionner valeurs des Likes du tableau likesArray
    const addition = (previousValue, currentValue) => previousValue + currentValue;
    let totalMediasLikes = likesArray.reduce(addition);
    
    // Mise en forme du total des likes dans le tag
    const tagLikesPrice = document.querySelector("#tag_LikesPrice");
    const spanLikes = document.createElement('span');
    const pLikes = document.createElement('p');
    pLikes.textContent = totalMediasLikes;
    pLikes.id = "totalLikes";
    const icon = document.createElement('i');
    icon.className = 'fas fa-heart tag-heart';
    tagLikesPrice.appendChild(spanLikes);
    spanLikes.appendChild(pLikes);
    spanLikes.appendChild(icon);
}

// Création de l'encard donnée du photographe .photograph-header
async function init(photographerId){
    const photographer = await getPhotographer(photographerId);
    const medias = await getMedias(photographer);
        
    /**insérer infos photographe**/
    //Création d'un <div> avant <button> de contact pour Nom, City, Tagline
    const photographHeader = document.querySelector(".photograph-header");
    const contactButton = document.querySelector("#contact_button");
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

    //Création d'une <img> après <button> de contact
    const picture = `assets/photographers/${photographer.portrait}`;
    const img = document.createElement('img');
    img.setAttribute("src", picture);
    photographHeader.appendChild(img);

    //Insertion nom photographe dans modal
    document.getElementById("modal_title").innerHTML = document.getElementById("modal_title").innerHTML + "<br/>" + photographer.name;

    //Mise en forme du tag en bas à droite avec nb likes total et tarif
    const tagLikesPrice = document.querySelector("#tag_LikesPrice");
    const pPrice = document.createElement('p');
    pPrice.textContent = photographer.price + '€ / jour';
    tagLikesPrice.appendChild(pPrice);   
}

const photographerId = new URLSearchParams(window.location.search).get("index");

init(photographerId);


/***TOTAL LIKES + MISE EN FORME**
function totalLikes() {
    
    // Création des constantes et éléments html
    const tagLikesPrice = document.querySelector("#tag_LikesPrice");
    const spanLikes = document.createElement('span');
    const pLikes = document.createElement('p');
    pLikes.id = "totalLikesValue";
    const icon = document.createElement('i');
    icon.className = 'fas fa-heart tag-heart';
    tagLikesPrice.appendChild(spanLikes);
    spanLikes.appendChild(pLikes);
    spanLikes.appendChild(icon);
    
    
    // Sélection de tous les spans qui contiennent la valeur des likes des medias du photographe
    const allMediaLikes = document.getElementsByClassName("mediaLikes");
    console.log(allMediaLikes);

    // Initialisation de la variable qui va contenir le total
    let likesTotalValue = 0;

    // Boucle qui va incrémenter valeur de chaque span à la variable likesTotalValue
    for (let i = 0; i < allMediaLikes.length; i++) {
        likesTotalValue += parseInt(allMediaLikes[i].innerText);
    }

    // Mise à jour du texte des totals de Likes dans le tag
    pLikes.innerText = likesTotalValue;
}


totalLikes();
*/
