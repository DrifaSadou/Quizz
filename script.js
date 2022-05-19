/**
 * script.js - Script de la page
 */

/*************************/
/*       Questions       */
/*************************/

const questions = [
  {
    // Texte de la question
    question:
      "Dans la saga culte Star Wars, comment s'appelle le père de Luke Skywalker ?",
    // Réponses possibles
    answers: [
      "Darth Vader",
      "Anakin Skywalker",
      "Les deux réponse",
      "Aucune réponse",
    ],
    // Index de la réponse correcte
    correctAnswerIndex: 2,
  },
  {
    question:
      'En quelle année le groupe "The Beatles" a t\'il sorti le célèbre album "Sgt. Pepper\'s Lonely Hearts Club Band" ?',
    answers: ["1967", "1974", "1962", "1980"],
    correctAnswerIndex: 0,
  },
  {
    question:
      'Dans la série de jeux video "Zelda", quel est le nom du personnage principal qu\'incarne le joueur ?',
    answers: ["Zelda", "Ganon", "Tom", "Link"],
    correctAnswerIndex: 3,
  },
  {
    question:
      "Quel est le nom de la mission spatiale lunaire, menée par la NASA, dont l'équipage a du annuler son allunissage suite à une explosion pendant le voyage ?",
    answers: ["Apollo 9", "Mercury 1", "Apollo 13", "Gemini 2"],
    correctAnswerIndex: 2,
  },
];

/********* NE PAS MODIFIER AU DESSUS DE CETTE LIGNE *********/

/*************************/
/* Contenu du DOM chargé */
/*************************/
let score = 0;
document.addEventListener("DOMContentLoaded", () => {
  showQuestion(0);
});

function showQuestion(questionIndex) {
  const questionElement = document.getElementById('question');
  const answersElement = document.getElementById('answers');
  const scoreElement = document.getElementById('score');

  const item = questions[questionIndex]
  answersElement.innerHTML = ''
  questionElement.innerText = item.question;

  for (const answerIndex in item.answers) {
    const answer = item.answers[answerIndex];
    const liElement = document.createElement('li');

    liElement.classList.add('answer')
    liElement.innerText = answer;
    liElement.addEventListener('click', () => {
      if (answerIndex == item.correctAnswerIndex) {
        score = score + 1;
        scoreElement.innerText = score;
      }

      if (questionIndex < questions.length - 1) {
        showQuestion(questionIndex + 1);

      } else {
        questionElement.innerHTML = 'Vous avez fini! Bien joué!'
        answersElement.innerHTML = ''

      }


    });

    answersElement.appendChild(liElement);
  }
}