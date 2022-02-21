// Récupération des données des photographes du json et conversion pour les rendre exploitables
async function getPhotographer(index) {
    const resultat = await fetch ("data/photographers.json")
    const photographers = await resultat.json()
    const photographer = photographers.photographers[index]
    return photographer
}

const photographerId = new URLSearchParams(window.location.search).get("index");

// Création de l'encart donnée du photographe .photograph-header
async function init(photographerId){
    const photographer = await getPhotographer(photographerId);
    // Appelle la fonction getMedias pour afficher les medias
    await getMedias(photographer);
        
    /**insérer infos photographe**/
    //Création d'un <div> avant <button> de contact pour Nom, City, Tagline
    const photographHeader = document.querySelector(".photograph-header");
    const contactButton = document.querySelector("#contact_button");
    const photographerHeaderDiv = document.createElement('div');
    photographHeader.insertBefore(photographerHeaderDiv, contactButton);

    const h1 = document.createElement('h1');
    h1.textContent = photographer.name;
    const h2 = document.createElement('h2');
    h2.textContent = photographer.city + ', ' + photographer.country;
    const p = document.createElement('p');
    p.textContent = photographer.tagline;

    photographerHeaderDiv.appendChild(h1);
    photographerHeaderDiv.appendChild(h2);
    photographerHeaderDiv.appendChild(p);

    //Création d'une <img> après <button> de contact
    const picture = `assets/photographers/${photographer.portrait}`;
    const img = document.createElement('img');
    img.setAttribute("src", picture);
    img.setAttribute("alt", "Photo de " + photographer.name)
    photographHeader.appendChild(img);

    //Insertion nom photographe dans modal
    document.getElementById("modal_title").innerHTML = document.getElementById("modal_title").innerHTML + "<br/>" + photographer.name;

    //Mise en forme du tag en bas à droite avec nb likes total et tarif
    const tagLikesPrice = document.querySelector("#tag_LikesPrice");
    const pPrice = document.createElement('p');
    pPrice.textContent = photographer.price + '€ / jour';
    tagLikesPrice.appendChild(pPrice);   
}



init(photographerId);

// Récupération des données médias du json et conversion pour les rendre exploitables
async function getMedias(photographer) {
    const resultatMedias = await fetch ("data/photographers.json")
    let medias = await resultatMedias.json()
    medias = medias.media

    // Tableau qui va répertorier les likes de chaque medias d'un photographe
    let likesArray = []

    // Tableau qui va répertorier tous les medias d'un photographe
    let photographerMedias = []
    
    const photographerMediasSection = document.querySelector(".medias-display");

    // Balayge de chaque media du tableau à la recherche des medias souhaités
    let i = 0;
    medias.forEach(media => {
        // Si le photographerId de chaque media = à l'Id du photographe
        if (media.photographerId == photographer.id) {
            // Alors on affiche le media sur la page dans la section .photograph-medias
            
            media.index = i;
            // Récupération de chaque media en le faisant passer dans la MediasFactory
            // La Factory va définir s'il s'agit d'une image ou vidéo
            const photographerMedia = new MediasFactory(media);
            
            // Mise en forme de chaque média dans le DOM
            const mediaCardDOM = photographerMedia.getMediaCardDOM();
            photographerMediasSection.appendChild(mediaCardDOM);
            
            // Ajoute nb likes de chaque media dans tableau likesArray
            likesArray.push(media.likes);

            // Ajoute chaque media dans le tableau photographerMedias
            photographerMedias.push(media);
            i++
        } 
    });
    
    Lightbox.init(photographerMedias);

    // TOTAL LIKES => Fonction pour additionner valeurs des Likes du tableau likesArray
    const addition = (previousValue, currentValue) => previousValue + currentValue;
    let totalMediasLikes = likesArray.reduce(addition);
    
    // TOTAL LIKES => Mise en forme du total des likes dans le tag
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

    // Filtrage des Medias
    const filters = document.querySelectorAll("#filter_elements button");
    
    filters.forEach(filter => {
        // Au click
        filter.addEventListener("click", e => {
            switch(e.target.id) {
                case "filter_pop":
                    photographerMedias.sort(function (a, b) {
                        return b.likes - a.likes;
                    })
                break

                case "filter_titre":
                    photographerMedias.sort(function (a, b) {
                        return a.title.localeCompare(b.title);
                    })
                    //users.sort((a, b) => a.firstname.localeCompare(b.firstname))
                break

                case "filter_date":
                    photographerMedias.sort(function (a, b) {
                        return new Date(b.date) - new Date(a.date);
                    })
                break
            }
            
            photographerMediasSection.innerHTML = "";
            let i = 0;
            photographerMedias.forEach(media => {
                media.index = i;
                const photographerMedia = new MediasFactory(media);
                const mediaCardDOM = photographerMedia.getMediaCardDOM();
                photographerMediasSection.appendChild(mediaCardDOM);
                i++
            })
            Lightbox.init(photographerMedias);
        })
        // Au clavier
        filter.addEventListener("keyup", e => {
            if(e.key === 'Enter') {
                switch(e.target.id) {
                    case "filter_pop":
                        photographerMedias.sort(function (a, b) {
                            return b.likes - a.likes;
                        })
                    break

                    case "filter_titre":
                        photographerMedias.sort(function (a, b) {
                            return a.title.localeCompare(b.title);
                        })
                        //users.sort((a, b) => a.firstname.localeCompare(b.firstname))
                    break

                    case "filter_date":
                        photographerMedias.sort(function (a, b) {
                            return new Date(b.date) - new Date(a.date);
                        })
                    break
                }
            }
            
            photographerMediasSection.innerHTML = "";
            let i = 0;
            photographerMedias.forEach(media => {
                media.index = i;
                const photographerMedia = new MediasFactory(media);
                const mediaCardDOM = photographerMedia.getMediaCardDOM();
                photographerMediasSection.appendChild(mediaCardDOM);
                i++
            })
            Lightbox.init(photographerMedias);
        })
    })
}





