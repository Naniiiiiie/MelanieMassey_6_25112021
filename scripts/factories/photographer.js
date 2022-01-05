class Photographer {
    // Mise en place du constructor
    constructor(data,index) {
        this.name = data.name
        this.id = data.id
        this.city = data.city
        this.country = data.country
        this.tagline = data.tagline
        this.price = data.price
        this.portrait = data.portrait
        this.index = index
    }

    // Fonction qui va créer le profil de chaque photographe
    getUserCardDOM() {
        // Création d'un nouvel élément article dans la page
        const article = document.createElement('article');
        
        // J'écoute l'évènement click de l'élément article créé pour rediriger vers sa page individuelle
        article.addEventListener('click', () => {
            window.location.href = `photographer.html?index=${this.index}`;
        })

        // Création de chaque élément qui récupère les données de  chaque photographe
        const picture = `assets/photographers/${this.portrait}`;
        const img = document.createElement('img');
        img.setAttribute("src", picture);
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

