/* Cette factory va vérifier si chaque Media contient une image ou une vidéo
et rediriger le média vers le bon constructeur*/
class MediasFactory {
    constructor (media){
        if ("video" in media) {
            return new Videos(media);
        } else {
            return new Images(media);
        }
    }
}