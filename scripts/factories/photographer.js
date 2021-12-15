class Photographer {
    constructor(data) {
        this.name = data.name
        this.id = data.id
        this.city = data.city
        this.country = data.country
        this.tagline = data.tagline
        this.price = data.price
        this.portrait = data.portrait
    }
    getUserCardDOM() {
        const article = document.createElement('article');
        const picture = `assets/photographers/${this.portrait}`;
        const img = document.createElement('img');
        img.setAttribute("src", picture)
        const h2 = document.createElement('h2');
        h2.textContent = this.name;
        const h3 = document.createElement('h3');
        h3.textContent = this.city + ', ' + this.country;
        const h4 = document.createElement('h4');
        h4.textContent = this.tagline;
        const p = document.createElement('p');
        p.textContent = this.price + '€/jour';
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(h4);
        article.appendChild(p);
        return article;
    }
}
