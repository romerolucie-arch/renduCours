const prompt = require("prompt-sync")();

const questions = [
  {
    intitule: "Bienvenue dans l'aventure, voulez-vous jouez ? ",
    responses: ["Oui", "Non", "exit"],
  },
  {
    intitule:
      "Vous voyez deux portes, laquelle voulez-vous ouvrir ? La droite ou la gauche ? ",
    responses: ["Droite", "Gauche", "exit"],
  },
  {
    intitule: "Avez-vous des gants ? ",
    responses: ["Oui", "Non", "exit"],
  },
];

// équivalent à un .contains() sur la liste
function isInList(mot, liste) {
  for (i = 0; i < liste.length; i++) {
    if (mot === liste[i]) {
      return true;
    }
  }
}

// = console.log("Tu as choisi :" + toutesLesReponses);
function lireListeReponseChoisies(liste) {
  let reponses = "";
  for (let i = 0; i < liste.length; i++) {
    reponses += liste[i] + " ";
  }
  console.log("Vous avez choisi : "+reponses);
}

function poserQuestion(questionAPoser) {
  let choix = "";
  //while (choix !== questionAPoser.good) {
  // ! permet de faire une négation sur un opérateur booleen
  // même chose que faire isInList(choix, questionAPoser.responces) === false
  while (!isInList(choix, questionAPoser.responses)) {
    console.log(questionAPoser.intitule);
    for (let i = 0; i < questionAPoser.responses.length; i++) {
      console.log(questionAPoser.responses[i]);
    }
    choix = prompt("Votre choix : ");
    if (!isInList(choix, questionAPoser.responses)){
      console.log("Ce n'est pas un choix proposé");
    }
  }
  return choix;
}

let toutesLesReponses = [];
let reponsesChoisie = "";
reponsesChoisie = poserQuestion(questions[0]);

if (reponsesChoisie == "exit" || reponsesChoisie == "Non") {
  toutesLesReponses.push(reponsesChoisie);
  console.log("Vous quittez le jeu");
} else if (reponsesChoisie == "Oui") {
  toutesLesReponses.push(reponsesChoisie);
  reponsesChoisie = poserQuestion(questions[1]);
  {
    if (reponsesChoisie == "exit") {
      console.log("Vous quittez le jeu");
    } else if (reponsesChoisie == "Droite") {
      toutesLesReponses.push(reponsesChoisie);
      reponsesChoisie = poserQuestion(questions[2]);
      {
        if (reponsesChoisie == "exit") {
          console.log("Vous quittez le jeu");
        } else if (reponsesChoisie == "Oui") {
          toutesLesReponses.push(reponsesChoisie);
          console.log(
            "La porte explose quand vous l'ouvrez, vous êtes mort(e)",
          );
        } else if (reponsesChoisie == "Non") {
          toutesLesReponses.push(reponsesChoisie);
          console.log("La poignée est piégée, vous mourez empoisonné(e)");
        }
      }
    } else if (reponsesChoisie == "Gauche") {
      toutesLesReponses.push(reponsesChoisie);
      reponsesChoisie = poserQuestion(questions[2]);
      {
        if (reponsesChoisie == "exit") {
          console.log("Vous quittez le jeu");
        } else if (reponsesChoisie == "Oui") {
          toutesLesReponses.push(reponsesChoisie);
          console.log(
            "Félicitations, vous avez trouvez le trésor, c'est la fin de l'aventure",
          );
        } else if (reponsesChoisie == "Non") {
          toutesLesReponses.push(reponsesChoisie);
          console.log("La poignée est piégée, vous mourez empoisonné(e)");
        }
      }
    }
  }
}

// console.log("Tu as choisi :" + toutesLesReponses);
lireListeReponseChoisies(toutesLesReponses);


// const prompt = require("prompt-sync")()

// let choice = ""

// console.log("vous etes dans une foret, deux chemin s'offre a vous, gauche (g), droite, (d)");
// choice = prompt("entre ton choix")
// while (choice != "g" && choice != "d") {
//     choice = prompt("tu t'es tromper, d, g")
// }

// if (choice == "g") {
//     console.log("au bout du chemin, vous rencontrez Jeffrey Epstein, que faite vous ?");
//     choice = prompt("fuir (f), restez la, de toutre facon il a l'air cool (r)")
//     while (choice != "f" && choice != "r") {
//         choice = prompt("tu t'es tromper, f ou r")
//     }
//     if (choice == "f") {
//         console.log("tu fuis, mais tu tombe sur Donald Trump, c'est la merde PERDU");

//     } else {
//         console.log("attention derriere PERDU");

//     }
// } else {
//     console.log("Vous croisez une rousse qui mange de la tartiflette. que faites vous ?");
//     choice = prompt("Vous appellez Thomas a la rescousse T, vous entammez la conversattion, C")
//     while (choice != "T" && choice != "C") {
//         choice = prompt("tu t'es gourer T ou C")
//     }
//     if (choice == "T") {
//     console.log("Il arrive, mode BG, il se marie il vous dis merci GAGNER");
        
//     }else{
//         console.log("La rousse ne vous veux pas, PERDU");
        
//     }

// }