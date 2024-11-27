
    const players = JSON.parse(localStorage.getItem("players"))
let createbtn = document.getElementById("createbtn");
let importbtn = document.getElementById("importbtn");
let creaeteform = document.getElementById("createform");
let importform = document.getElementById("importform");
let formulaire = document.getElementById("formulaire");
let remplacant = document.getElementById("remplacant");
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
      
      this.submit(); 
    }
  });

  
  remplacant.innerHTML = `
    <div class="bg-opacity-30 bg-[url('img/badge_gold.webp')] bg-center bg-no-repeat bg-cover w-full h-full flex flex-col justify-center items-center max-w-sm mx-auto h-auto shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-black">
      <div class="flex justify-start">
        <div class="text-xs text-[#393218] leading-2 my-6">
          <p class="font-extrabold text-lg">90</p>
          <p class="font-semibold text-lg">Cf</p>
        </div>
        <div class="text-center mt-5 text-[#393218] font-extra-bold mr-[10px] flex flex-col">
          <img src="https://cdn.sofifa.net/players/158/023/25_120.png" alt="messi" class="w-[120px]">
          <p class="font-extrabold text-[12px]">Messi</p>
        </div>
      </div>
      <div class="boxes text-[12px] text-[#393218] grid grid-cols-6 grid-rows-2 gap-[4px]">
        <div>PA</div>
        <div>SH</div>
        <div>PA</div>
        <div>DR</div>
        <div>DE</div>
        <div>PH</div>
        <div class="font-extrabold">80</div>
        <div class="font-extrabold">87</div>
        <div class="font-extrabold">90</div>
        <div class="font-extrabold">94</div>
        <div class="font-extrabold">33</div>
        <div class="font-extrabold">64</div>
      </div>
      <div class="flages grid grid-cols-2 gap-4 items-center">
        <img src="https://cdn.sofifa.net/flags/ar.png" alt="" class="w-[14px]">
        <img src="https://cdn.sofifa.net/meta/team/239235/120.png" alt="" class="w-[14px]">
      </div>
    </div>
  `;
  
let createplayer = document.getElementById("createyourplayer");
createplayer.addEventListener("click",function(){
    let player = {
        name: document.getElementById("playername").value,
        position: document.getElementById("position").value,
        status: document.getElementById("position").value
        }
        

})
  
  