// Quiz Portion
// Ruben Lopez
// questions for user
const questions = [
    {
        question: "Which job focuses primarily on iPhone apps?",
        options: ["Mobile Apps Developer", "Web Developer", "Data Analyst", "Network Administrator"],
        correctAnswer: "Mobile Apps Developer"
    },
    {
        question: "Which job is responsible for managing and maintaining databases?",
        options: ["Software Developer", "Database Administrator", "Cybersecurity Expert", "Full Stack Developer"],
        correctAnswer: "Database Administrator"
    },
    {
        question: "Which job focuses on securing computer systems and networks?",
        options: ["Web Developer", "Database Administrator", "Cybersecurity Expert", "Mobile Apps Developer"],
        correctAnswer: "Cybersecurity Expert"
    },
    {
        question: "Which job involves writing code for websites or web applications?",
        options: ["Data Analyst", "Web Programmer", "Technical Writer", "Software Developer"],
        correctAnswer: "Web Programmer"
    },
    {
        question: "Which job involves analyzing and interpreting data to gain insights?",
        options: ["Consultant", "Data Analyst", "UX/UI Designer", "Web Developer"],
        correctAnswer: "Data Analyst"
    },
    {
        question: "Which job involves creating and designing the visual aspects of a website or application?",
        options: ["Coder", "UX/UI Designer", "Network Administrator", "Test Engineer"],
        correctAnswer: "UX/UI Designer"
    },
    {
        question: "Which job involves testing software for bugs and errors?",
        options: ["Full Stack Developer", "Coder", "Test Engineer", "Industry Analyst"],
        correctAnswer: "Test Engineer"
    },
    {
        question: "Which job focuses on designing and implementing computer networks?",
        options: ["Hardware Engineer", "Network Administrator", "Games Developer", "Chief Information Officer"],
        correctAnswer: "Network Administrator"
    },
    {
        question: "Which job involves writing code for both the front-end and back-end of a website?",
        options: ["Web Architect", "Industry Analyst", "Full Stack Developer", "Technical Writer"],
        correctAnswer: "Full Stack Developer"
    },
    {
        question: "Which job involves researching and analyzing data to solve complex problems?",
        options: ["Data Research Scientist", "Games Developer", "Consultant", "Security Analyst"],
        correctAnswer: "Data Research Scientist"
    }
];

// setting a counter
let score = 0;

// display each question
function displayQuestions() {
    const quizContainer = document.getElementById('quiz-container');
    questions.forEach((q, index) => {
        const questionElement = document.createElement('div');
        questionElement.innerHTML = `<p>${index + 1}. ${q.question}</p>`;
        q.options.forEach(option => {
            const radioBtn = document.createElement('input');
            radioBtn.type = 'radio';
            radioBtn.name = 'question' + index;
            radioBtn.value = option;
            questionElement.appendChild(radioBtn);

            const label = document.createElement('label');
            label.textContent = option;
            questionElement.appendChild(label);
            questionElement.appendChild(document.createElement('br'));
        });
        quizContainer.appendChild(questionElement);
    });
}

// function to calculate score
function calculateScore() {
    const resultContainer = document.getElementById('result-container');
    let userAnswers = [];
    for (let i = 0; i < questions.length; i++) {
        const selectedOption = document.querySelector('input[name="question' + i + '"]:checked');
        if (selectedOption) {
            userAnswers.push(selectedOption.value);
            if (selectedOption.value === questions[i].correctAnswer) {
                score++;
            }
        }
    }
    const scorePercentage = (score / questions.length) * 100;
    resultContainer.innerHTML = `<p>Your score: ${score} out of ${questions.length}</p>`;
    resultContainer.innerHTML += `<p>Percentage: ${scorePercentage}%</p>`;
    score = 0; // Reset score for next attempt
}

window.onload = function () {
    displayQuestions();
    const submitBtn = document.getElementById('submit-btn');
    submitBtn.addEventListener('click', () => {
        calculateScore();
    });
};