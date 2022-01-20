class Lightbox {

    static init() {
        // Constante qui regroupe tous les liens amenant vers des jpg et mp4
        const links = document.querySelectorAll('a[href$=".jpg"], a[href$=".mp4"]')
        // Pour chaque media cliqué, j'annule le lien existant et créé une lightbox associée au media
        links.forEach(link => link.addEventListener('click', e => {
            // stop comportement par défaut du lien
            e.preventDefault()
            // Affiche une Lightbox
            new Lightbox(e.currentTarget.getAttribute('href'))
        }))
    }

    constructor (url) {
        const lightboxElement = this.buildDOM(url)
        document.body.appendChild(lightboxElement)
    }

    buildDOM (url) {
        const dom = document.createElement('div')
        dom.id = "lightbox_container"
        dom.innerHTML = `<button id="lightbox_close">Fermer</button>
            <button id="lightbox_prev">Précédent</button>
            <div id="lightbox_media">
                <img src="assets/photographers/Art_Triangle_Man.jpg" alt="">
                <h3>Titre du media</h3>
            </div>
            <button id="lightbox_next">Suivant</button>`
        return dom
    }
}

/**
 * <div id="lightbox_container">
      <button id="lightbox_close">Fermer</button>
      <button id="lightbox_prev">Précédent</button>
      <div id="lightbox_media">
        <img src="assets/photographers/Art_Triangle_Man.jpg" alt="">
        <h3>Titre du media</h3>
      </div>
      <button id="lightbox_next">Suivant</button>
    </div>
 */

Lightbox.init();