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
                new Lightbox(e.currentTarget.getAttribute('href'),medias)
            })
        })
    }

    constructor (url,medias) {
        this.medias = medias
        const lightboxElement = this.buildDOM(url)
        document.body.appendChild(lightboxElement)
    }

    // Construit la lightbox
    buildDOM (url) {
        const dom = document.createElement('div')
        dom.id = "lightbox_container"
        dom.innerHTML = `<button id="lightbox_close">Fermer</button>
            <button id="lightbox_prev">Précédent</button>
            <div id="lightbox_media">
                <img src="${url}" alt="">
                <h3>Titre du media</h3>
            </div>
            <button id="lightbox_next">Suivant</button>`
        
        // Ferme la lightbox au clic sur la croix de fermeture
        function close() {
            dom.remove()
        }        
        const closeButton = dom.querySelector("#lightbox_close")
        closeButton.addEventListener("click", close)
        
        /*
        // Passe au media suivant
        function next() {

        }
        const nextButton = dom.querySelector("#lightbox_next")
        nextButton.addEventListener("click", next)
        */

        return dom
    }

    
}




