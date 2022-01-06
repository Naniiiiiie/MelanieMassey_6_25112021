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

        const videoFile = `assets/photographers/${this.video}`;
        const video = document.createElement('video');
        const sourceVideo = document.createElement('source');
        sourceVideo.setAttribute("src",videoFile);
        sourceVideo.setAttribute("type","video/mp4");
        const span = document.createElement('span');
        span.textContent = this.likes;
        const icon = document.createElement('i');
        // code icone

        // article.appendChild Video
        article.appendChild(span);
        article.appendChild(icon);
        article.appendChild(video);
        video.appendChild(sourceVideo);
        return article;
    }
}