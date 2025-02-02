class Videos {
    constructor(data) {
        this.id = data.id
        this.photographerId = data.photographerId
        this.title = data.title
        this.video = data.video
        this.likes = data.likes
        this.date = data.date
        this.price = data.price
        this.index = data.index
    }
    getMediaCardDOM() {
        const article = document.createElement('article');

        // Création d'un lien vers video
        const videoFile = `assets/photographers/${this.video}`;
        const linkMedia = document.createElement('a');
        linkMedia.setAttribute("href", videoFile);
        linkMedia.classList.add("mediaLink");
        linkMedia.dataset.index = this.index;
        article.appendChild(linkMedia);

        // Création élément video
        const video = document.createElement('video');
        video.setAttribute("controls", "")
        const sourceVideo = document.createElement('source');
        sourceVideo.setAttribute("src",videoFile);
        sourceVideo.setAttribute("type","video/mp4");
        
        linkMedia.appendChild(video);
        video.appendChild(sourceVideo);

        const p = document.createElement('p');
        p.textContent = "Votre navigateur ne supporte pas les videos html 5.";
        const a = document.createElement('a');
        a.setAttribute("href", `assets/photographers/${this.video}`);
        p.appendChild(a);
        video.appendChild(p);
        
        
        // Création d'un div enfant de l'élément article pour insérer le titre & likes du média
        const mediaDiv = document.createElement('div');
        mediaDiv.className = 'mediaDiv';
        article.appendChild(mediaDiv);
        const h3 = document.createElement('h3');
        h3.textContent = this.title;
        mediaDiv.appendChild(h3);

        // Création d'un div enfant de l'élément mediaDiv pour insérer nb de likes et icone coeur
        const likesDiv = document.createElement('div');
        likesDiv.className= 'likesDiv';
        mediaDiv.appendChild(likesDiv);
        const span = document.createElement('span');
        span.className = "mediaLikes";
        span.textContent = this.likes;
        const icon = document.createElement('i');
        icon.className = 'fas fa-heart';// code icone
        icon.setAttribute("tabindex", 0);
        likesDiv.appendChild(span);
        likesDiv.appendChild(icon);

        // Incrémentation du like dans la fiche Media mais aussi dans le total des likes
        // Au Click
        icon.addEventListener("click", addOneLike);
        // Au clavier
        icon.addEventListener("keyup", (e) => {
            if(e.key === "Enter") {
                addOneLike();
            }
        });
        function addOneLike() {
            let totalLikes = document.getElementById("totalLikes").innerHTML++;
            console.log(totalLikes);
            span.textContent++;
            return span;
        }
        
        return article;
    }
    
    getMediaLightboxDOM() {
        const mediaLightboxDiv = document.createElement('div')
        mediaLightboxDiv.id = "lightbox_media"
        mediaLightboxDiv.innerHTML = `<video controls>
                    <source src="assets/photographers/${this.video}" type="video/mp4" alt="${this.title}">
                    <p>Votre navigateur ne supporte pas les videos html 5. <a href="assets/photographers/${this.video}">Cliquez ici</a></p>
                </video>
                <h3>${this.title}</h3>`
        return mediaLightboxDiv
    }
}