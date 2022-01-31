class Lightbox {

    static init(medias) {
        // Constante qui regroupe tous les liens amenant vers des jpg et mp4
        const links = document.querySelectorAll(".mediaLink");
        // Pour chaque media cliqué, j'annule le lien existant et créé une lightbox associée au media
        links.forEach(link => {
            link.addEventListener('click', e => {
                // stop comportement par défaut du lien
                e.preventDefault()
                // Affiche une Lightbox
                new Lightbox(medias[e.currentTarget.dataset.index],medias)
            })
        })
    }

    constructor (media, medias) {
        this.medias = medias
        this.index = media.index
        const lightboxElement = this.buildDOM(media)
        document.body.appendChild(lightboxElement)
    }
    
    // Construit la lightbox
    buildDOM (media) {
        const dom = document.createElement('div')
        const photographerMedia = new MediasFactory(media)
        const mediaLightboxDOM = photographerMedia.getMediaLightboxDOM()
        console.log(mediaLightboxDOM)

        dom.id = "lightbox_container"
        dom.innerHTML = `<button id="lightbox_prev">Précédent</button>`
        dom.appendChild(mediaLightboxDOM)
        dom.insertAdjacentHTML('beforeend', '<button id="lightbox_next">Suivant</button><button id="lightbox_close">Fermer</button>')
        
        
        
        // Ferme la lightbox au clic sur la croix de fermeture
        function close() {
            dom.remove()
        }        
        const closeButton = dom.querySelector("#lightbox_close")
        closeButton.addEventListener("click", close)
        
        
        
        /*
        // Passe au media suivant
        function next() {
            let i = [];

            
        }
        
        const nextButton = dom.querySelector("#lightbox_next")
        nextButton.addEventListener("click", next)
        */

        return dom
    }

    
}




