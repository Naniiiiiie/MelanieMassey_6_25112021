class Images {
    constructor(data) {
        this.id = data.id
        this.photographerId = data.photographerId
        this.title = data.title
        this.image = data.image
        this.likes = data.likes
        this.date = data.date
        this.price = data.price
    }
    getMediaCardDOM() {
        const article = document.createElement('article');

        const picture = `assets/photographers/${this.image}`;
        const img = document.createElement('img');
        img.setAttribute("src", picture);
        const h3 = document.createElement('h3');
        h3.textContent = this.title;
        const span = document.createElement('span');
        span.textContent = this.likes;
        const icon = document.createElement('i');
        // code icone

        article.appendChild(img);
        article.appendChild(h3);
        article.appendChild(span);
        article.appendChild(icon);
        return article;
    }
}