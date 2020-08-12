var startButton = document.getElementById("start-button");
var questionBox = document.getElementById("question-box");
var questionElement = document.getElementById("question");
var answerButtonsElement = document.getElementById("answer-buttons");
var timerEl = document.getElementById("countdown");
let btn1 = document.getElementById("Q1");
let btn2 = document.getElementById("Q2");
let btn3 = document.getElementById("Q3");
let btn4 = document.getElementById("Q4");
let correctAnswer = document.getElementById("Correct");
let nextButton = document.getElementById("next-btn");
let saveDiv = document.getElementById("saveDiv");
let userInitials = document.getElementById("userInitials");
let saveUserInitialsBtn = document.getElementById("saveUserInitialsBtn");
let yourScore = document.getElementById("yourScore");

//saveDiv.style.display = "none";

let currentQuestion = 0;
let userScore = 0;

/*function countDown() {
  var timeLeft = 60;

  var timeInterval = setInterval(function () {
    timerEl.textContent = timeLeft + " seconds remaining";
    timeLeft--;

    if (timeLeft === 0) {
      timerEl.textContent = "";
      clearInterval(timeInterval);
    }

  }, 1000);

}

startButton.addEventListener("click", function () {
  countDown();

}); */

let questions = [
  {
    Question: "Commonly used data types do not include:",
    Answers: ["string", "boolean", "alert", "numbers"],
    Answer: 2

  },
  {
    Question: "Inside which HTML element do we put the JavaScript?:",
    Answers: ["script", "style", "body", "h1"],
    Answer: 0

  },
  {
    Question: "What is the third language of the internet?:",
    Answers: ["strings", "jquery", "css", "Javascript"],
    Answer: 3

  },
  {
    Question: "What are square brackets used for?:",
    Answers: ["string", "boolean", "arrays", "numbers"],
    Answer: 2

  }
];

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", nextQuestion);
saveUserInitialsBtn.addEventListener("click", saveUser);

btn1.addEventListener("click", selectAnswer);
btn2.addEventListener("click", selectAnswer);
btn3.addEventListener("click", selectAnswer);
btn4.addEventListener("click", selectAnswer);

function startGame() {
  startButton.style.display = "none"
  nextQuestion()
}

function nextQuestion() {
  if (currentQuestion == questions.lenth - 1) {
    alert("Your Score Is " + userScore)
    btn1.style.display = "none"
    btn2.style.display = "none"
    btn3.style.display = "none"
    btn4.style.display = "none"
    questionElement.innerText = "Your score is " + userScore
    nextButton.style.display = "block"
    correctAnswer.innerText = ""

  }
  else {
    questionElement.innerText = questions[currentQuestion].Question
    btn1.innerText = questions[currentQuestion].Answers[0]
    btn2.innerText = questions[currentQuestion].Answers[1]
    btn3.innerText = questions[currentQuestion].Answers[2]
    btn4.innerText = questions[currentQuestion].Answers[3]
    correctAnswer.innerText = ""
  }
}

function selectAnswer() {
  let userChoice = this.getAttribute("data-value")
  console.group(userChoice)
  if (questions[currentQuestion].Answer == userChoice) {
    userScore++
    correctAnswer.innerText = "Correct!"

  }
  else {
    correctAnswer.innerText = "Wrong."
  }
  if (currentQuestion < questions.length - 1) {
    currentQuestion++
  }
}

function saveUser() {
  let savedInitials = userInitials.value
  let previousScore = localStorage.getItem("userScore") || 0
  if (userScore > previousScore) {
    localStorage.setItem("userName ", savedInitials)
    localStorage.setItem("userScore ", userScore)
    displayLocalStorage()
  }
}

function displayLocalStorage() {
  let user = localStorage.getItem("userName") || "Good luck! "
  let score = localStorage.getItem("userScore") || " 0"
  yourScore.innerText = user + score
}

displayLocalStorage()


// Square Brackets = array. Used for collections of alike objects. Use for loops and square brackets to access indices.
// Curly Brackets = object. Used to organize related data. Use dots to traverse



/*function get_question() {
  let current = questions[current_index]
  // Write the logic that populates the quize question with the questions from the array
  quizQuestion.textContent = current.Question
  quizAnswer.textContent = ""
  for (let i = 0; i < current.Answer.length; i++) {
    new_button = document.createElement("button")
    new_button.innerHTML = current.Answer[i].text
    quizAnswer.append(new_button)
  }
}*/




// Create a click event for the buttons
// Alert the innerHTML 
// Loop through the array at the current_index and return the value
// If correct alert Correct
// Create a score variable
// Increase it if correct





