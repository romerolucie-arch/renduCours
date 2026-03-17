const prompt = require("prompt-sync")();

const attaques = [
  {
    Nom: "Frappe Rapide",
    Puissance: 10,
    Precision: 50,
  },
  {
    Nom: "Soin Léger",
    Puissance: 15,
    Precision: 33.33,
  },
  {
    Nom: "Coup Puissant",
    Puissance: 20,
    Precision: 33.33,
  },
  {
    Nom: "Frappe Dévastatrice",
    Puissance: 30,
    Precision: 25,
  },
];

let lutin = {
  nom: "Sombre lutin",
  pv: 100,
};

let guerrier = {
  nom: "Guerrier du feu",
  pv: 100,
};

const acceptedResponse = [1, 2, 3, 4];

function random(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function demanderAtt() {
  console.log(
    "Bienvenue dans le jeu, vous êtes le Guerrier du feu et vous vous battez contre le Sombre Lutin",
  );

  while (lutin.pv > 0 && guerrier.pv > 0) {
    console.log(attaques);
    numAtt = parseInt(prompt("Choisissez une attaque : 1 , 2 , 3 ou 4 ? ")) - 1;
    taper(guerrier, numAtt);
  }
  if (lutin.pv == 0) {
    console.log("Bravo, vous avez gagné");
  } else if (guerrier.pv == 0) {
    console.log("Dommage, vous avez perdu");
  }
}

// function taper(perso,numAtt) {
//   let choix = 0;
//   while (!acceptedResponse.includes(choix)) {
//     do {
//       numAtt =
//         parseInt(prompt("Choisissez une attaque : 1 , 2 , 3 ou 4 ? ")) - 1;
//       if (aleatoire(0, 100) <= attaques[numAtt].Précision) {
//         if (perso == guerrier) {
//           lutin.pv -= attaques[numAtt].Puissance;
//         } else if (perso == lutin) {
//           guerrier.pv -= attaques[numAtt].Puissance;
//         }
//       }
//     }
//   }
// }

function taper(perso, numAtt) {
  console.log("--- Tour du " + perso.nom + " ---");
  if (perso == guerrier) {
    if (random(0, 100) <= attaques[numAtt].Precision) {
      if (attaques[numAtt].Nom == "Soin Léger") {
        if (guerrier.pv >= 85) {
          guerrier.pv = 100;
        } else {
          guerrier.pv += attaques[numAtt].Puissance;
        }
      } else {
        lutin.pv -= attaques[numAtt].Puissance;
      }
      console.log("La technique " + attaques[numAtt].Nom + " a réussie ! ");
    } else {
      console.log("La technique " + attaques[numAtt].Nom + " a ratée ! :( ");
    }
    console.log("Le " + lutin.nom + " a " + lutin.pv + " PV");
    console.log("Le " + guerrier.nom + " a " + guerrier.pv + " PV");
    if (lutin.pv > 0) {
      taper(lutin, random(0, 3));
    }
  } else if (perso == lutin) {
    if (random(0, 100) <= attaques[numAtt].Precision) {
      if (attaques[numAtt].Nom == "Soin Léger") {
        if (lutin.pv >= 85) {
          lutin.pv = 100;
        } else {
          lutin.pv += attaques[numAtt].Puissance;
        }
      } else {
        guerrier.pv -= attaques[numAtt].Puissance;
      }
      console.log("La technique " + attaques[numAtt].Nom + " a réussie ! ");
    } else {
      console.log("La technique " + attaques[numAtt].Nom + " a ratée ! :( ");
    }
    console.log("Le " + lutin.nom + " a " + lutin.pv + " PV");
    console.log("Le " + guerrier.nom + " a " + guerrier.pv + " PV");
  }
}

demanderAtt();

// const prompt = require("prompt-sync")()
// let atkchoice = ""
// const player = {
//     name: "Guerrier du feu",
//     pv: 100,
//     atks: [
//         { name: "flammeche", power: -10, accuracy: 1 },
//         { name: "lance flamme", power: -20, accuracy: 2 },
//         { name: "potion de feu", power: 10, accuracy: 1 },
//         { name: "boule de feu", power: -30, accuracy: 3 },
//     ]
// }

// const cpu = {
//     name: "sombre lutin",
//     pv: 100,
//     atks: [
//         { name: "expeliarmus", power: -10, accuracy: 1 },
//         { name: "diffindo", power: -20, accuracy: 2 },
//         { name: "episkey", power: 10, accuracy: 1 },
//         { name: "Avada kedavra", power: -30, accuracy: 3 },
//     ]
// }

// function choiceAtk() {
//     let choice = null
//     for (let i = 0; i < player.atks.length; i++) {
//         console.log(i + 1 + ") " + player.atks[i].name);
//     }
//     choice = prompt("choisi une attaque")
//     while (choice != 1 && choice != 2 && choice != 3 && choice != 4) {
//         choice = prompt("tu t'es trompé, choise entyre 1 et 4")
//     }
//     return player.atks[parseFloat(choice) - 1]
// }

// function attaque(atk, target, hitter) {
//     if (randomize(0, atk.accuracy) == atk.accuracy) {
//         if (atk.power < 0) {
//             console.log("l'attaque : " + atk.name + " touche et inflige a " + target.name + " " + atk.power + " de degat");
//             target.pv += atk.power
//         } else {
//             console.log(hitter.name + " s'est soigné");
            
//             hitter.pv += atk.power
//             if (hitter.pv > 100) {
//                 hitter.pv = 100
//             }
           
//         }
//     } else {
//         console.log("l'attaque a echouée");
//     }
// }

// function choiceCpu() {

//     return cpu.atks[randomize(0, cpu.atks.length - 1)]
// }

// function randomize(min, max) {
//     return Math.round(Math.random() * (max - min) + min)
// }

// function displayStatus() {
//     console.log(player.name + " pv : " + player.pv);
//     console.log(cpu.name + " pv : " + cpu.pv);
    
// }




// function init() {
//     while (cpu.pv > 0 && player.pv > 0) {
//         displayStatus()
//         atkchoice = choiceAtk()
//         if (cpu.pv <= 0) {
//             break
//         }
//         attaque(atkchoice, cpu, player)
//         atkchoice = choiceCpu()
//         attaque(atkchoice, player, cpu)
//     }
// }

// init()