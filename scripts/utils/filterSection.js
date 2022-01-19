// Définition des constantes
const filterContainer = document.getElementById("filter_container");
const filterDate = document.getElementById("filter_date");
const filterTitre = document.getElementById("filter_titre");
const iconChevron = document.querySelector(".fa-chevron-down");
const iconChevronUp = document.querySelector(".fa-chevron-up");

// Fonction pour afficher tous les filtres
function displayFilters() {
    filterDate.style.display = "block";
    filterTitre.style.display = "block";
    iconChevron.style.display = "none";
    iconChevronUp.style.display = "block";
}

// Fonction qui va refermer les filtres
function hideFilters() {
    filterDate.style.display = "none";
    filterTitre.style.display = "none";
    iconChevron.style.display = "block";
    iconChevronUp.style.display = "none";
}

// Ecoute de l'évènement click pour développer et fermer les filtres
iconChevron.addEventListener("click", displayFilters);
iconChevronUp.addEventListener("click", hideFilters);

