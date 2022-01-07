class Videos {
    constructor(data) {
        this.id = data.id
        this.photographerId = data.photographerId
        this.video = data.video
        this.likes = data.likes
        this.date = data.date
        this.price = data.price
    }
    getMediaCardDOM() {
        const article = document.createElement('article');

        // Création élément video
        const videoFile = `assets/photographers/${this.video}`;
        const video = document.createElement('video');
        const sourceVideo = document.createElement('source');
        sourceVideo.setAttribute("src",videoFile);
        sourceVideo.setAttribute("type","video/mp4");
        article.appendChild(video);
        video.appendChild(sourceVideo);
        
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
        span.textContent = this.likes;
        const icon = document.createElement('i');
        icon.className = 'fas fa-heart';// code icone
        likesDiv.appendChild(span);
        likesDiv.appendChild(icon);

        return article;
    }
}