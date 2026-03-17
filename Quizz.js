const prompt = require("prompt-sync")();

const questions = [
  {
    intitule:
      "Dans Goldorak, de quelle planète le héros, Actarus est-il originaire ? ",
    responses: ["1. Namek", "2. Vega", "3. La Terre", "4. Euphor"],
    good: 4,
  },
  {
    intitule:
      "Selon la légende, de quoi avait peur Bucéphale, le cheval d'Alexandre le Grand ? ",
    responses: ["1. Son ombre", "2. Des chiens", "3. Des hommes", "4. De l'eau"],
    good: 1,
  },
  {
    intitule:
      "Dans Donjons et Dragons, si vous avez en face de vous un dragon noir, que crache t-il ? ",
    responses: ["1. Du feu", "2. De l'acide", "3. Du poison", "4. De l'électricité"],
    good: 2,
  },
  {
    intitule:
      "Quel est le nom de la race des chats égyptiens, basée sur le bruit qu'il font ? ",
    responses: ["1. Mau", "2. Nyan", "3. Miaou", "4. Miyau"],
    good: 1,
  },
  {
    intitule: "De quel groupe Eddie the Head est-il la mascotte ? ",
    responses: ["1. Metallica", "2. Judas Priest", "3. Iron Maiden", "4. Black Sabbath"],
    good: 3,
  },
];

const acceptedResponse = [ 1, 2, 3, 4];
let score = 0;

function poserQuestion(questionAPoser) {
  let choix = 0;
  while (!acceptedResponse.includes(choix)) {
    console.log(questionAPoser.intitule);
    for (let i = 0; i < questionAPoser.responses.length; i++) {
      console.log(questionAPoser.responses[i]);
    }
    choix = parseInt(prompt('Votre choix : 1 , 2 , 3 ou 4 ? '));
    if (choix == questionAPoser.good) {
      score++;
    }
  }
}

function boucleJeu() {
    for (let index = 0; index < questions.length; index++) {
        poserQuestion(questions[index]);
    }
}

boucleJeu();

console.log("Votre score est de " + score + "/5");


// const prompt = require("prompt-sync")()
// const arrayQuestion = [
//     {
//         question: "quelle est la couleur de la mer ?",
//         answers : ["a) bleu", "b) blanc", "c) rouge","d) violet"],
//         goodAnswer : "a"
//     },
//      {
//         question: "quelle est la couleur du cheval blanc ?",
//         answers : ["a) bleu", "b) blanc", "c) rouge","d) violet"],
//         goodAnswer : "b"
//     },
// ]
// let score = 0
// let choice = ""

// for (let i = 0; i < arrayQuestion.length; i++) {
//     console.log(arrayQuestion[i].question);
//     for (let j = 0; j < arrayQuestion[i].answers.length; j++) {
//         console.log(arrayQuestion[i].answers[j]);
//     }
//     choice = prompt("Choisi une reponse :")
//     while (choice != "a" && choice != "b" && choice != "c" && choice != "d" ) {
//          choice = prompt("tu t'es trompé, Choisi une reponse :")
//     }
//     if (choice == arrayQuestion[i].goodAnswer) {
//         score++
//         console.log("bonne reponse");
//     }else{
//         console.log("mauvaise reponse");
        
//     }
// }

// console.log("Vous avez un score de " + score + " / " + arrayQuestion.length);