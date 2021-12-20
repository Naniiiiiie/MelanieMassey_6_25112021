class PhotographerPage {
    constructor(data) {
        this.name = data.name
        this.id = data.id
        this.city = data.city
        this.country = data.country
        this.tagline = data.tagline
        this.price = data.price
        this.portrait = data.portrait
        //this.medias = 
        this.title = data.title
    }

    //Je créé une méthode pour compléter le .photograph-header
    getPhotographerHeaderDiv() {
        //Création d'un <div> avant <button> de contact pour Nom, City, Tagline
        const photographerHeaderDiv = document.createElement('div');

        const h2 = document.createElement('h2');
        h2.textContent = this.name;
        const h3 = document.createElement('h3');
        h3.textContent = this.city + ', ' + this.country;
        const h4 = document.createElement('h4');
        h4.textContent = this.tagline;
        
        photographerHeaderDiv.appendChild(h2);
        photographerHeaderDiv.appendChild(h3);
        photographerHeaderDiv.appendChild(h4);
        
    }

    //Je créé un élément img portait du photographe
    // à faire

    //Je créé une méthode pour afficher les médias sur .photograph-medias
    getPhotographerMedias() {
        //Création de l'élément section, deuxième enfant de l'élément main
        const photographerMedias = document.createElement('section');

        const medias = `assets/photographers/${this.medias}`;
        const img = document.createElement('img');
        img.setAttribute("src", medias);
        const h5 = document.createElement('h5');
        h5.textContent = this.title;
        const icon = document.createElement('i');
        // code icone

        photographerMedias.appendChild(img);
        photographerMedias.appendChild(h5);
        photographerMedias.appendChild(icon);
    }
}