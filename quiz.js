// Quiz Portion
// Ruben Lopez
// questions for user
const quizQuestions  = [
    {
        question: "Which job focuses primarily on iPhone apps?",
        options: ["Mobile Apps Developer", "Web Developer", "Data Analyst", "Network Administrator"],
        answer: 0
    },
    {
        question: "Which job is responsible for managing and maintaining databases?",
        options: ["Software Developer", "Database Administrator", "Cybersecurity Expert", "Full Stack Developer"],
        answer: 1
    },
    {
        question: "Which job focuses on securing computer systems and networks?",
        options: ["Web Developer", "Database Administrator", "Cybersecurity Expert", "Mobile Apps Developer"],
        answer: 2
    },
    {
        question: "Which job involves writing code for websites or web applications?",
        options: ["Data Analyst", "Web Programmer", "Technical Writer", "Software Developer"],
        answer: 1
    },
    {
        question: "Which job involves analyzing and interpreting data to gain insights?",
        options: ["Consultant", "Data Analyst", "UX/UI Designer", "Web Developer"],
        answer: 1
    },
    {
        question: "Which job involves creating and designing the visual aspects of a website or application?",
        options: ["Coder", "UX/UI Designer", "Network Administrator", "Test Engineer"],
        answer: 1
    },
    {
        question: "Which job involves testing software for bugs and errors?",
        options: ["Full Stack Developer", "Coder", "Test Engineer", "Industry Analyst"],
        answer: 2
    },
    {
        question: "Which job focuses on designing and implementing computer networks?",
        options: ["Hardware Engineer", "Network Administrator", "Games Developer", "Chief Information Officer"],
        answer: 1
    },
    {
        question: "Which job involves writing code for both the front-end and back-end of a website?",
        options: ["Web Architect", "Industry Analyst", "Full Stack Developer", "Technical Writer"],
        answer: 2
    },
    {
        question: "Which job involves researching and analyzing data to solve complex problems?",
        options: ["Data Research Scientist", "Games Developer", "Consultant", "Security Analyst"],
        answer: 0
    }
];

// Initialize variables
let currentQuestionIndex = 0;
let score = 0;
const quizContainer = document.getElementById("quiz-container");
const resultContainer = document.getElementById("result-container");



// Function to display current question
function displayQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    quizContainer.innerHTML = `
        <h3>${currentQuestion.question}</h3>
        <ul>
            ${currentQuestion.options.map((option, index) => `
                <li class="option-box" data-index="${index}">
                    ${option}
                </li>
            `).join("")}
        </ul>
    `;
    const options = document.querySelectorAll(".option-box");
    options.forEach(option => {
        option.addEventListener("click", () => {
            const selectedIndex = parseInt(option.getAttribute("data-index"));
            checkAnswer(selectedIndex);
        });
    });
}

// Function to check user's answer
function checkAnswer(selectedIndex) {
    const correctAnswer = quizQuestions[currentQuestionIndex].answer;
    if (selectedIndex === correctAnswer) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        displayQuestion();
    } else {
        displayResult();
    }
}

// Function to display quiz result
function displayResult() {
    const percentageScore = (score / quizQuestions.length) * 100;
    resultContainer.innerHTML = `
        <h3>Quiz Result</h3>
        <p>Your score: ${score}/${quizQuestions.length} (${percentageScore}%)</p>
        <button id="retry-btn" class="btn btn-primary">Try Again</button>
    `;
    submitBtn.style.display = "none";
    document.getElementById("retry-btn").addEventListener("click", () => {
        window.location.href = "quiz.html"; 
    });
}

// Display first question
displayQuestion();