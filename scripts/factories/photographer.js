class Photographer {
    // Mise en place du constructor
    constructor(data) {
        this.name = data.name
        this.id = data.id
        this.city = data.city
        this.country = data.country
        this.tagline = data.tagline
        this.price = data.price
        this.portrait = data.portrait
    }

    // Méthode qui construit le HTML du profil de chaque photographe
    getUserCardDOM() {
        // Création d'un nouvel élément article dans la page
        const article = document.createElement('article');
        
        // Création du lien de la future vignette (article) d'un photographe
        const linkPhotographer = document.createElement('a');
        const urlPhotographer = `photographer.html?index=${this.id}`;
        linkPhotographer.setAttribute("href", urlPhotographer);
        article.appendChild(linkPhotographer);
        
        /*// J'écoute l'évènement click de l'élément article créé pour rediriger vers sa page individuelle
        article.addEventListener('click', () => {
            window.location.href = urlPhotographer;
        })*/

        // Création de chaque élément qui récupère les données de  chaque photographe
        const picture = `assets/photographers/${this.portrait}`;
        const img = document.createElement('img');
        img.setAttribute("src", picture);
        img.setAttribute("alt", "Photo de " + this.name)
        const h2 = document.createElement('h2');
        h2.textContent = this.name;
        const h3 = document.createElement('h3');
        h3.textContent = this.city + ', ' + this.country;
        const h4 = document.createElement('h4');
        h4.textContent = this.tagline;
        const p = document.createElement('p');
        p.textContent = this.price + '€/jour';
        linkPhotographer.appendChild(img);
        linkPhotographer.appendChild(h2);
        linkPhotographer.appendChild(h3);
        linkPhotographer.appendChild(h4);
        linkPhotographer.appendChild(p);
        return article;
    }
}

