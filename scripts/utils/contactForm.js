// DOM Elements
const modalContainer = document.getElementById("contact_modal");
const modal = document.getElementById("modal");
const contactButton = document.getElementById("contact_button");
const closeButton = document.getElementById("close_button");
const modalForm = document.getElementById("modal_form");

// Functions to display and close the modal
function displayModal() {
	modalContainer.style.display = "block";
}
function closeModal() {
    modalContainer.style.display = "none";
}

// Eventlisteners to display and close the modal
contactButton.forEach((clickBtn) => clickBtn.addEventListener("click"), displayModal);
closeButton.forEach((clickBtn) => clickBtn.addEventListener("click"), closeModal);


// Customize Modal title h2 with the photographer's name
/*
async function getPhotographer(index) {
    const resultat = await fetch ("data/photographers.json")
    const photographers = await resultat.json()
    const photographer = photographers.photographers[index]
    return photographer
}

async function init(photographerId){
    const photographer = await getPhotographer(photographerId);
    
    const h2 = document.createElement('h2');
    h2.textContent = photographer.name;

    //Insertion nom photographe dans modal
    const modalForm = document.getElementById("modal_form");
    const modal = document.getElementById("modal");
    const modalPhotographerName = modal.insertBefore(h2, modalForm);
    modalPhotographerName.id = 'modal__Photographer--name';
    
}

const photographerId = new URLSearchParams(window.location.search).get("index");

init(photographerId);
*/