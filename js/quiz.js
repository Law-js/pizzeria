let array = ["Patientez avec ce quiz,", "avant de vous régaler."];
let wordIndex = 0;
let letterIndex = 0;
const btns = document.querySelectorAll(".quiz-content button");

const creatLetter = () => {
  const letter = document.createElement("span");
  target.appendChild(letter);
  letter.classList.add("letter");
  letter.style.opacity = "0";
  letter.style.animation = "anim 5s ease forwards";
  letter.textContent = array[wordIndex][letterIndex];
  setTimeout(() => {
    letter.remove();
  }, 2000);
};

const loop = () => {
  setTimeout(() => {
    if (wordIndex >= array.length) {
      wordIndex = 0;
      letterIndex = 0;
      loop();
    } else if (letterIndex < array[wordIndex].length) {
      creatLetter();
      letterIndex++;
      loop();
    } else {
      wordIndex++;
      letterIndex = 0;
      setTimeout(() => {
        loop();
      }, 2000);
    }
  }, 70);
};
loop();

/**/

class Question {
  constructor(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
  }
  isCorrectAnswer(choice) {
    return this.answer === choice;
  }
}
let questions = [
  new Question(
    "Quel est le prénom de la patronne de chez Sylvie ?",
    ["Sophie", "Sara", "Sylvie", "Sonia"],
    "Sylvie"
  ),
  new Question(
    "Combien de plats sont à la carte ?",
    ["30", "40", "23", "31"],
    "30"
  ),
  new Question(
    "Quelle pizza a des lardons ?",
    ["4 saisons", "Roberto", "Hamm'zza", "Reine Paysanne"],
    "Reine Paysanne"
  ),
  new Question(
    "En quelle année Mimo'zza a été renommée Chez Sylvie ?",
    ["2018", "2019", "2020", "2021"],
    "2020"
  ),
  new Question(
    "De quelle modèle est la voiture de livraison ?",
    ["Clio 2", "Twingo 1", "Twingo 2", "Clio 1"],
    "Twingo 1"
  ),
  new Question(
    "Qui selon vous est la meilleure employée ? (ça restera un secret)",
    ["Cathy", "Lorraine", "Sylvie", "Aucune"],
    "Aucune"
  ),
  new Question(
    "Quelle est la différence entre une Reine et une Reine Blanche ?",
    ["Les lardons", "Les olives", "La crème", "Les champignons"],
    "La crème"
  ),
  new Question(
    "Quel ingrédient ne se trouve pas sur une flamm ?",
    ["Fromage", "Crème", "Lardons", "Oignons"],
    "Fromage"
  ),
  new Question(
    "La pizzeria se trouve dans la rue Mal Foch, mais à quel numéro ?",
    ["43", "8", "51", "17"],
    "17"
  ),
  new Question(
    "Jusqu'à combien de kilomètres peut-on être livré par la pizzeria ?",
    ["5 kms", "15 kms", "10 kms", "20 kms"],
    "10 kms"
  ),
];

class Quiz {
  constructor(questions) {
    this.score = 0;
    this.questions = questions;
    this.currentQuestionIndex = 0;
  }
  getCurrentQuestion() {
    return this.questions[this.currentQuestionIndex];
  }
  guess(answer) {
    if (this.getCurrentQuestion().isCorrectAnswer(answer)) {
      this.score++;
    }
    this.currentQuestionIndex++;
  }
  hasEnded() {
    return this.currentQuestionIndex >= this.questions.length;
  }
}

const display = {
  elementShown: function (id, text) {
    let element = document.getElementById(id);
    element.innerHTML = text;
  },
  endQuiz: function () {
    endQuizHTML = `
        <h1>Quiz terminé !</h1>
        <h3> Votre score est de : ${quiz.score} / ${quiz.questions.length}</h3>`;
    this.elementShown("quiz", endQuizHTML);
  },
  question: function () {
    this.elementShown("question", quiz.getCurrentQuestion().text);
  },
  choices: function () {
    let choices = quiz.getCurrentQuestion().choices;

    guessHandler = (id, guess) => {
      document.getElementById(id).onclick = function () {
        quiz.guess(guess);
        quizApp();
      };
    };

    for (let i = 0; i < choices.length; i++) {
      this.elementShown("choice" + i, choices[i]);
      guessHandler("guess" + i, choices[i]);
    }
  },
  progress: function () {
    let currentQuestionNumber = quiz.currentQuestionIndex + 1;
    this.elementShown(
      "progress",
      "Question " + currentQuestionNumber + " sur " + quiz.questions.length
    );
  },
};

quizApp = () => {
  if (quiz.hasEnded()) {
    display.endQuiz();
  } else {
    display.question();
    display.choices();
    display.progress();
  }
};

let quiz = new Quiz(questions);
quizApp();

const removeDynamicText = () => {
  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      target.style.display = "none";
    });
  });
};
removeDynamicText();
