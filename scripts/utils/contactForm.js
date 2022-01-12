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
