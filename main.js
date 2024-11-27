let createbtn = document.getElementById("createbtn");
let importbtn = document.getElementById("importbtn");
let creaeteform = document.getElementById("createform")
let importform = document.getElementById("importform")
let formulaire = document.getElementById("formulaire")
let remplacant = document.getElementById("remplacant")
importbtn.addEventListener("click", () => {

    creaeteform.classList.add("hidden");
    importform.classList.remove("hidden");
    formulaire.classList.remove("from-red-700", "via-red-800");
    formulaire.classList.add("from-green-700", "via-green-800");
});

createbtn.addEventListener("click", () => {

    importform.classList.add("hidden");
    creaeteform.classList.remove("hidden");
    formulaire.classList.add("from-red-700", "via-red-800");
    formulaire.classList.remove("from-green-700", "via-green-800");
});

document.getElementById("createform").addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche l'envoi du formulaire par défaut
  
    // Récupérer les champs du formulaire
    const playerName = document.getElementById("playername").value.trim();
    const position = document.getElementById("position").value;
    const status = document.querySelectorAll("#status input[type='number']");
  
    // Initialiser les erreurs
    let errors = [];
  
    // Validation du nom du joueur
    if (playerName.length < 3) {
      errors.push("Le nom du joueur doit contenir au moins 3 caractères.");
    }
    if (!/^[a-zA-Z\s]+$/.test(playerName)) {
        errors.push("Le nom complet doit contenir uniquement des lettres et des espaces.");
    }
  
    // Validation de la position
    if (!position) {
      errors.push("Veuillez sélectionner une position.");
    }
  
    // Validation des statistiques
    status.forEach((status) => {
      const value = parseInt(status.value, 10);
      if (isNaN(value) || value < 0 || value > 100) {
        const statName = status.placeholder.trim();
        alert("La statistique doit être un nombre entre 0 et 100");
        console.log(statName);
      }
    });
  
    // Afficher les erreurs ou soumettre
    if (errors.length > 0) {
      alert(errors.join("\n"));
    } else {
      alert("Joueur créé avec succès !");
      // Vous pouvez envoyer les données ici, par exemple avec fetch()
      this.submit(); // Supprimez `event.preventDefault()` si vous voulez envoyer le formulaire.
    }
  });

  