// DOM Elements
const modalContainer = document.getElementById("contact_modal");
const modal = document.getElementById("modal");
const contactButton = document.getElementById("contact_button");
const closeButton = document.getElementById("close_button");
const modalForm = document.getElementById("modal_form");
const submitButton = document.getElementById("submit_button");

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

// Eventlistener Submit button
submitButton.addEventListener("click", function(e) {
    e.preventDefault();
    submitRequest();
    closeModal();
});

// Function to console.log the form entries
function submitRequest() {
    let prenomInput = document.getElementById("prenom").value;
    let nomInput = document.getElementById("nom").value;
    let emailInput = document.getElementById("email").value;
    let messageInput = document.getElementById("message").value;
    console.log("Prénom : " + prenomInput);
    console.log("Nom : " + nomInput);
    console.log("email : " + emailInput);
    console.log("Message : " + messageInput);
}