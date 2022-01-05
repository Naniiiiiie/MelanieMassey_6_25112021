class Videos {
    constructor(data) {
        this.id = data.id
        this.photographerId = data.photographerId
        this.video = data.video
        this.likes = data.likes
        this.date = data.date
        this.price = data.price
    }
    getVideos() {
        const article = document.createElement('article');

        const video = `assets/photographers/${this.video}`;
        const // Ajouter code video
        const span = document.createElement('span');
        span.textContent = this.likes;
        const icon = document.createElement('i');
        // code icone

        // article.appendChild Video
        article.appendChild(span);
        article.appendChild(icon);
    }
}