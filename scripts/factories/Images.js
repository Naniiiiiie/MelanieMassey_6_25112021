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
        
        // Création élément image
        const picture = `assets/photographers/${this.image}`;
        const img = document.createElement('img');
        img.setAttribute("src", picture);
        article.appendChild(img);

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
        likesDiv.appendChild(span);
        likesDiv.appendChild(icon);

        // Incrémentation du like mais infini
        icon.addEventListener("click", addOneLike);
        function addOneLike() {
            span.textContent++;
            return span;
        }
        
        return article;
    }
}