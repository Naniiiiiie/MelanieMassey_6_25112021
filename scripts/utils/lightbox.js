class Lightbox {
    static alreadyListened = false;
    static init(medias) {

        // Constante qui regroupe tous les liens de chaque média
        const links = document.querySelectorAll(".mediaLink");
        // Pour chaque media cliqué, j'annule le lien existant et créé une lightbox associée au media
        links.forEach(link => {
            link.removeEventListener('click', e => {
                // stop comportement par défaut du lien
                e.preventDefault()
                // Affiche une Lightbox
                new Lightbox(medias[e.currentTarget.dataset.index], medias)
            })
            link.addEventListener('click', e => {
                // stop comportement par défaut du lien
                e.preventDefault()
                // Affiche une Lightbox
                new Lightbox(medias[e.currentTarget.dataset.index], medias)
            })
        })
    }

    constructor(media, medias) {
        this.medias = medias
        this.index = media.index
        const lightboxElement = this.buildDOM(media)
        document.body.appendChild(lightboxElement)

    }

    // Construit la lightbox
    buildDOM(media) {
        const dom = document.createElement('div')
        const photographerMedia = new MediasFactory(media)
        const mediaLightboxDOM = photographerMedia.getMediaLightboxDOM()

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

        // LIGHTBOX NEXT
        const nextButton = dom.querySelector('#lightbox_next')
        nextButton.addEventListener("click", () => {
            this.next()
        })

        // LIGHTNBOX PREV
        const prevButton = dom.querySelector('#lightbox_prev')
        prevButton.addEventListener("click", () => {
            this.prev()
        })


        // Navigation Lightbox avec le Keyboard
        window.removeEventListener('keyup', (e) => {
            this.onKeyUp(e, dom)
            
        })

        if (!Lightbox.alreadyListened) {
            window.addEventListener('keyup', (e) => {
                this.onKeyUp(e)
            })
            Lightbox.alreadyListened = true;
        }


        return dom
    }

    next() {
        this.index = (((this.index + 1) % this.medias.length) + this.medias.length) % this.medias.length
        const lightboxElement = this.buildDOM(this.medias[this.index])
        document.getElementById('lightbox_container').remove()
        document.body.appendChild(lightboxElement)
        console.log(this.index)
    }

    prev() {
        this.index = (((this.index - 1) % this.medias.length) + this.medias.length) % this.medias.length
        const lightboxElement = this.buildDOM(this.medias[this.index])
        document.getElementById('lightbox_container').remove()
        document.body.appendChild(lightboxElement)
        console.log(this.index)
    }

    onKeyUp(e, dom) {
        if (e.key === 'Escape') {
            document.getElementById('lightbox_container').remove()
        } else if (e.key === 'ArrowLeft') {
            this.prev()
        } else if (e.key === 'ArrowRight') {
            this.next()
        }
    }
}




