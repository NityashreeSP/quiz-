let currentQuestionIndex = 0;
let score = 0;
const userAnswers = [];
const questions = [

    {
        question: "1.Tatva is basically",
        options: ["An acting club", "A dancing club ", "A singing club ", "A technical club"],
        correctAnswer: 1,
         // Index of the correct answer (0-based)
    },
    
  {
    question: "2.When was tatva started?",
    options: ["2008", "2013", "2010", "2012"],
    correctAnswer: 2, // Index of the correct answer (0-based)
  },
  {
    question: "3.Who is the current president and vice president of tatva?",
    options: ["Pranav and Kishan", "Shivaprakash and Vikas", "Rohit and Sumanth", "Madan and Abhilash"],
    correctAnswer: 3,
  },
  {
    question: "4.During which event tatva presented it's first street play in 2024?",
    options: ["Kagada", "Kagathon", "Majama", "Impethon"],
    correctAnswer: 1,
  },
  {
    question: "5. Orientation event name of tatva club is called",
    options: ["Milagro", "Fiesta", "Jaatre", "Taranga"],
    correctAnswer: 4,
  },
  {
    question: "6. How many times UVCE won mad ads in intercollege competetion?",
    options: ["5 times", "9 times", "3 times", "10 times"],
    correctAnswer: 2,
  },
  {
    question: "7.Unofficial insta page id of tatva is?",
    options: ["Theater Titans", "Tatva Rockers", "Talent Tiles", "TT news"],
    correctAnswer: 1,
  },
  {
    question: "8.What is the name of feature created by UVCE TATVA to share information about Artists on their social media platform ?",
    options: ["TT News", "Dhani", "Yaari", "Talent Tiles"],
    correctAnswer: 4,
  },
  {
    question: "9.During which event tatva collabed with chethana in 2024?",
    options: ["Kalaranga", "Vaibhava", "Jaatre", "Parichaya"],
    correctAnswer: 2,
  },
  {
    question: "10.In which college did Tatva secure its first skit title ?",
    options: ["JIT", "CMRIT", "AIT", "BMS"],
    correctAnswer: 3,
  },
  
];



function loadQuestion() {
  if (currentQuestionIndex < questions.length) {
    const question = questions[currentQuestionIndex];
    document.getElementById("question-text").textContent = question.question;
    const options = document.querySelectorAll(".option");
    options.forEach((button, index) => {
      button.textContent = question.options[index];
    });
  } else {
    showScore();
  }
}

function checkAnswer(selectedAnswer) {
  const correctAnswer = questions[currentQuestionIndex].correctAnswer;
  
  // Store the user's answer and whether it's correct
  userAnswers.push({
    question: questions[currentQuestionIndex].question,
    userAnswer: selectedAnswer,
    correctAnswer: correctAnswer,
    isCorrect: selectedAnswer === correctAnswer
  });

  // Update the score if the answer is correct
  if (selectedAnswer === correctAnswer) {
    score++;
  }
  
  currentQuestionIndex++;
  loadQuestion();
}

function showScore() {
  // Hide the question container and show the score container
  document.getElementById("question-container").style.display = "none";
  document.getElementById("score-container").style.display = "block";
  document.getElementById("score").textContent = score;

  // Display correct answers
  const answersList = document.getElementById("correct-answers");
  userAnswers.forEach((answer, index) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <strong>Q${index + 1}:</strong> ${answer.question}<br>
      <strong>Your Answer:</strong> ${answer.options[answer.userAnswer - 1]}<br>
      <strong>Correct Answer:</strong> ${answer.options[answer.correctAnswer - 1]}<br>
      <hr>
    `;
    answersList.appendChild(listItem);
  });
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  userAnswers.length = 0;  // Reset the user answers
  document.getElementById("question-container").style.display = "block";
  document.getElementById("score-container").style.display = "none";
  loadQuestion();
}

// Load the first question on page load
window.onload = loadQuestion;
