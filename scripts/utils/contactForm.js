// DOM Elements
const modalContainer = document.getElementById("contact_modal");
const modal = document.getElementById("modal");
const contactButton = document.getElementById("contact_button");
const closeButton = document.getElementById("close_button");
const modalForm = document.getElementById("modal_form");

// Eventlisteners to display and close the modal
contactButton.addEventListener("click", displayModal);
closeButton.addEventListener("click", closeModal);

// Functions to display and close the modal
function displayModal() {
	modalContainer.style.display = "block";
}
function closeModal() {
    modalContainer.style.display = "none";
}