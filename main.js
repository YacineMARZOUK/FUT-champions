// localStorage.clear();
// fetch('players.json')
// .then(data => data.json())
// .then(data => 
//   fillLocalstorage(data.players)
// )

function fillLocalstorage(data){
  localStorage.setItem("players", JSON.stringify(data))
}
    const players = JSON.parse(localStorage.getItem("players"))
let createbtn = document.getElementById("createbtn");
let importbtn = document.getElementById("importbtn"); 
let creaeteform = document.getElementById("creaeteform");
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
  querySelectorAll

    importform.classList.add("hidden");
    creaeteform.classList.remove("hidden");
    formulaire.classList.add("from-red-700", "via-red-800");
    formulaire.classList.remove("from-green-700", "via-green-800");
});

document.getElementById("creaeteform").addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche l'envoi du formulaire par défaut
  
    // Récupérer les champs du formulaire
    const playerName = document.getElementById("playername").value.trim();
    const position = document.getElementById("position").value;
    const status = document.querySelectorAll("#status input[type='number']");
    
  
    // Initialiser les erreurs
    let errors = [];
  
    // Validation du nom du joueur
    if (playerName.length < 3) {
      alert("Le nom du joueur doit contenir au moins 3 caractères.");
    }
    if (!/^[a-zA-Z\s]+$/.test(playerName)) {
        alert("Le nom complet doit contenir uniquement des lettres et des espaces.");
    }
  
    // Validation de la position
    if (!position) {
      alert("Veuillez sélectionner une position.");
    }
    let isValid = true ;
    status.forEach((status) => {
        const value = status.value ;
       
        if ( value < 0 || value > 100) {
          const statName = status.placeholder.trim();
          
          console.log(statName);
          isValid= false;
        }
      });
      
      // Afficher les erreurs ou soumettre
      if (errors.length > 0) {
        alert(errors.join("\n"));
      } else {
        
        
        // Réinitialiser les champs du formulaire
        document.querySelector("form").reset();
      }
    if(isValid ){
      
     
        console.log(document.getElementById("raiting").value);
          let playere = {
              id:players.length,
              name: document.getElementById("playername").value,
              position: document.getElementById("positionSelection").value,
              rating : document.getElementById("raiting").value,
              photo : document.getElementById("photo").value,
              flag : document.getElementById("flag").value,
              logo : document.getElementById("logo").value
              }
              console.log(playere)
              if(playere.position=="GK"){
                playere.diving = document.getElementById("diving").value,
                playere.kicking= document.getElementById("kicking").value,
                playere.reflexes=document.getElementById("reflexes").value,
                playere.speed= document.getElementById("speed").value,
                playere.handling= document.getElementById("handling").value
                playere.positioning= document.getElementById("Positioning").value
      
              }
              else{
              playere.pace= document.getElementById("Pace").value,
              playere.shooting= document.getElementById("Shooting").value,
              playere.passing = document.getElementById("Passing").value,
              playere.dribbling = document.getElementById("Dribbling").value,
              playere.defending= document.getElementById("Defending").value,
              playere.physical= document.getElementById("Physical").value
      
              }
              
      
      
      
              console.log(playere)
              players.push(playere);
              showPlayer(players)
              localStorage.setItem("players", JSON.stringify(players));
              console.log(players);
      
      
              addEventForCards()
              alert("Joueur créé avec succès !");
            }
            else 
            alert("le status est invalid La statistique doit être un nombre entre 0 et 100");
    
    })
      
      addEventForCards()
  
  
  // creer le player

let statuss = document.getElementById("status");

  document.getElementById('positionSelection').addEventListener('change',function(){

    if(document.getElementById('positionSelection').value=="GK"){

        document.getElementById('status').innerHTML=`
            <input type="number" placeholder="diving" id="diving" class="rounded pl-[10px]">
            <input type="number" placeholder="handling" id="handling" class="rounded pl-[10px]">
            <input type="number" placeholder="kicking" id="kicking" class="rounded pl-[10px]">
            <input type="number" placeholder="reflexes" id="reflexes" class="rounded pl-[10px]">
            <input type="number" placeholder="speed" id="speed" class="rounded pl-[10px]">
            <input type="number" placeholder="positioning" id="Positioning" class="rounded pl-[10px] ">
          `

    }
    else{
        document.getElementById('status').innerHTML=`
           <input type="number" placeholder="Pace" id="Pace" class="rounded pl-[10px] text-red">
            <input type="number" placeholder="Shooting"id="Shooting" class="rounded pl-[10px]">
            <input type="number" placeholder="Passing" id="Passing" class="rounded pl-[10px]">
            <input type="number" placeholder="Dribbling" id="Dribbling" class="rounded pl-[10px]">
            <input type="number" placeholder="Defending" id="Defending" class="rounded pl-[10px]">
            <input type="number" placeholder="Physical" id="Physical"  class="rounded pl-[10px]">

          `
    }
  });
  
  const allPlayersDiv = document.getElementById("allplayers");

// Configuration de la grille pour organiser les cartes

showPlayer(players)
function showPlayer(players){
  allPlayersDiv.innerHTML = ``
  players.forEach(player => {
    
    const labels = player.position === "GK" 
      ? ["DI", "HA", "KI", "RE", "SP", "PO"]
      : ["PA", "SH", "PA", "DR", "DE", "PH"];
  
    const stats = player.position === "GK"
      ? [player.diving, player.handling, player.kicking, player.reflexes, player.speed, player.positioning]
      : [player.pace, player.shooting, player.passing, player.dribbling, player.defending, player.physical];
  
    const playerCard = `
       <div class="bg-opacity-30 bg-[url('img/badge_gold.webp')] bg-center bg-no-repeat bg-cover w-[80%] h-auto sm:w-64 sm:h-80 flex flex-col justify-center items-center mx-auto shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-black" id="${player.id}">
    <div class="flex flex-wrap justify-between text-center px-4 sm:px-8 pt-4">
      <button class="bg-red-700 text-white font-bold py-2 px-4 rounded mb-2 sm:mb-0 mr-0 sm:mr-[10px] cursor-pointer hover:shadow-lg hover:shadow-black" onclick="DeletePlayer(${player.id})">
        Delete
      </button>
      <div class="text-[#393218]">
        <p class="font-extrabold text-base sm:text-lg ">${player.rating}</p>
        <p class="font-semibold text-sm sm:text-lg leading-none">${player.position}</p>
      </div>
    </div>
    <div class="text-center text-xs text-[#393218] font-extrabold mt-2">
      <img src="${player.photo}" alt="${player.name}" class="w-20 sm:w-[100px] mx-auto">
      <p class="font-extrabold text-base mt-1 truncate w-full sm:w-40 text-center">${player.name}</p>
    </div>
    <div class="boxes text-[15px] text-[#393218] grid grid-cols-6 gap-2 leading-4">
              ${labels.map((label, index) => `
                <div>${label}</div>
                <div class="font-extrabold">${stats[index] || '-'}</div>
              `).join('')}
            </div>
    <div class="flags grid grid-cols-2 gap-x-4 items-center mt-4">
      <img src="${player.flag}" alt="${player.nationality}" class="w-4 sm:w-[15px]">
      <img src="${player.logo}" alt="${player.club}" class="w-4 sm:w-[15px]">
    </div>
  </div>
</div>
    `;
    allPlayersDiv.innerHTML += playerCard;
  });
}
  // add the popup of players
  const allCards = document.querySelectorAll(".card");
let Container
  allCards.forEach(card => {
    card.addEventListener("click", function (e) {
      console.log(e.target.id);
      Container = e.target.id
      const popup = document.getElementById("popup");
      popup.style.display = "flex";
      popup.classList.add("flex-wrap");
  
      // Réinitialiser le contenu de la popup
      popup.innerHTML = `
        <button onclick="document.getElementById('popup').style.display='none'" 
                id="close-popup" 
                class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
          Close
        </button>
      `;
  
      // Trouver les joueurs correspondants
      players.forEach(player => {
        if (player.position === e.target.id) {
          const labels = player.position === "GK"
            ? ["DI", "HA", "KI", "RE", "SP", "PO"]
            : ["PA", "SH", "PA", "DR", "DE", "PH"];
  
          const stats = player.position === "GK"
            ? [player.diving, player.handling, player.kicking, player.reflexes, player.speed, player.positioning]
            : [player.pace, player.shooting, player.passing, player.dribbling, player.defending, player.physical];
  
          // Créer une carte pour chaque joueur
          const playerCard = document.createElement("div");
          playerCard.className = `
            choosed bg-center bg-no-repeat bg-cover w-64 h-80 flex flex-col 
            justify-center items-center mx-auto shadow-none transition-shadow 
            duration-300 cursor-pointer hover:shadow-lg hover:shadow-black 
            bg-opacity-30 bg-[url('img/badge_gold.webp')]
          `;
          playerCard.id = player.id
          playerCard.innerHTML = `
            <div class="flex justify-between text-center px-8 pt-4 mt-4">
              <div class="text-[#393218]">
                <p class="font-extrabold text-lg leading-none">${player.rating}</p>
                <p class="font-semibold text-lg leading-none">${player.position}</p>
              </div>
            </div>
            <div class="text-center text-xs text-[#393218] font-extrabold mt-2">
              <img src="${player.photo}" alt="${player.name}" class="w-[100px] mx-auto">
              <p class="font-extrabold text-base mt-1 truncate w-40 text-center">${player.name}</p>
            </div>
            <div class="boxes text-[15px] text-[#393218] grid grid-cols-6 gap-2 leading-4">
              ${labels.map((label, index) => `
                <div>${label}</div>
                <div class="font-extrabold">${stats[index] || '-'}</div>
              `).join('')}
            </div>
            <div class="flages grid grid-cols-2 gap-4 items-center mt-2">
              <img src="${player.flag}" alt="${player.nationality}" class="w-[15px]">
              <img src="${player.logo}" alt="${player.club}" class="w-[15px]">
            </div>
          `;
  
          // Ajouter la carte au popup
          popup.appendChild(playerCard);
          addEventForCards()
        }
      });
    });
  });
  
function addEventForCards(){
    let choosed = document.querySelectorAll(".choosed");
  console.log(choosed)
  choosed.forEach(card=>{
    card.addEventListener("click",function(event){
      let div = document.getElementById(Container)


      players.forEach(player=>{
        if(player.id == event.target.id&&event.target.id!=""){
          let stats1;
          let stats2;
          let stats3;
          let stats4;
          let stats5;
          let stats6;
                  player.position === "GK"
                    ? [stats1 = player.diving,
                      stats2  = player.handling,
                      stats3 = player.kicking,
                      stats4 =  player.reflexes,
                      stats5 =  player.speed,
                      stats6 =   player.positioning]
                    : [stats1 = player.pace,
                      stats2  = player.shooting,
                      stats3 = player.passing,
                      stats4 =  player.dribbling,
                      stats5 =  player.defending,
                      stats6 =   player.physical]
                      const labels = player.position === "GK"
            ? ["DI", "HA", "KI", "RE", "SP", "PO"]
            : ["PA", "SH", "PA", "DR", "DE", "PH"];

          div.innerHTML = `
              <div
        class="card bg-opacity-30  bg-[url('img/badge_gold.webp')] bg-center bg-no-repeat bg-cover w-full h-full flex flex-col justify-center items-center max-w-sm mx-auto h-auto shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-black" id="${player.position}">
        <div class="flex justify-start ">
          <div class="text-xs text-[#393218]  mt-4">
            <p class="font-extrabold">${player.rating}</p>
            <p class="font-semibold">${player.position}</p>
          </div>
          <div class="text-center text-xs text-[#393218] font-extra-bold">
            <img src="${player.photo}" alt="${player.photo}" class="w-[70px]">
            <p class="font-extrabold text-[9px]">${player.name}</p>
          </div>
        </div>
        <div
          class="boxes text-[9px] mt-4 text-[#393218] grid grid-cols-6 grid-rows-2 gap-[4px]   justify-center items-center">
          <div>${labels[0]}</div>
          <div>${labels[1]}</div>
          <div>${labels[2]}</div>
          <div>${labels[3]}</div>
          <div>${labels[4]}</div>
          <div>${labels[5]}</div>
          <div class="font-extrabold">${stats1}</div>
          <div class="font-extrabold">${stats2}</div>
          <div class="font-extrabold">${stats3}</div>
          <div class="font-extrabold">${stats4}</div>
          <div class="font-extrabold">${stats5}</div>
          <div class="font-extrabold">${stats6}</div>
        </div>
        <div class="flages grid grid-cols-2 gap-4 items-center ">
          <img src="${player.flag}" alt="" class="w-[10px]">
          <img src="${player.logo}" alt="" class="w-[10px]">
        </div>
      </div>
          `
        }
      })

    })
  })
}

function DeletePlayer(idToRemove) {
  
  // Parse players from localStorage
  let players = JSON.parse(localStorage.getItem("players")) || [];
 
  // Filter out the player with the given id
 players = players.filter(player => player.id != idToRemove);
  
  // Update localStorage with the new array
  localStorage.setItem("players", JSON.stringify(players));
  // Refresh the displayed players
 
  showPlayer(players);
}
