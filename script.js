// Ensure quizData is loaded
if (typeof quizData === 'undefined') {
    alert("Error loading questions. Ensure questions.js is properly generated.");
}

const homeScreen = document.getElementById('home-screen');
const subjectList = document.getElementById('subject-list');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');

const quizTitle = document.getElementById('quiz-title');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const backBtn = document.getElementById('back-btn');
const progressBar = document.getElementById('progress-bar');
const currentScoreDisplay = document.getElementById('current-score');

const finalScoreVal = document.getElementById('final-score-val');
const totalQuestionsVal = document.getElementById('total-questions-val');
const resultMessage = document.getElementById('result-message');
const homeBtn = document.getElementById('home-btn');

let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let selectedSubject = '';
let hasAnswered = false;
let userAnswers = {};

// Initialize app
function init() {
    renderSubjects();
}

function renderSubjects() {
    subjectList.innerHTML = '';
    const subjects = Object.keys(quizData);

    subjects.forEach(subject => {
        const card = document.createElement('div');
        card.className = 'subject-card';
        card.textContent = subject;
        card.onclick = () => startQuiz(subject);
        subjectList.appendChild(card);
    });
}

function switchScreen(screen) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    screen.classList.add('active');
}

function startQuiz(subject) {
    selectedSubject = subject;
    currentQuestions = quizData[subject];
    currentIndex = 0;
    score = 0;
    userAnswers = {};

    quizTitle.textContent = subject;
    currentScoreDisplay.textContent = score;

    switchScreen(quizScreen);
    loadQuestion();
}

function loadQuestion() {
    hasAnswered = !!userAnswers[currentIndex];

    prevBtn.disabled = currentIndex === 0;

    const q = currentQuestions[currentIndex];
    questionText.textContent = `Q${currentIndex + 1}. ${q.question}`;

    // Update progress
    progressBar.style.width = `${(currentIndex / currentQuestions.length) * 100}%`;

    optionsContainer.innerHTML = '';

    const options = q.options;
    for (const [key, value] of Object.entries(options)) {
        if (!value) continue;
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = `<strong>${key.toUpperCase()}</strong>: ${value}`;
        btn.onclick = () => selectOption(btn, key);
        optionsContainer.appendChild(btn);
    }

    if (hasAnswered) {
        const selected = userAnswers[currentIndex];
        const correct = q.answer;
        const allBtns = optionsContainer.querySelectorAll('.option-btn');
        allBtns.forEach(b => {
            b.style.cursor = 'default';
            const k = b.innerHTML.match(/<strong>(.*?)<\/strong>/i)[1].toLowerCase();
            if (k === correct) b.classList.add('correct');
            if (k === selected && selected !== correct) b.classList.add('wrong');
        });
        nextBtn.disabled = false;
        nextBtn.textContent = currentIndex === currentQuestions.length - 1 ? 'Finish Test' : 'Next Question \u2192';
    } else {
        nextBtn.disabled = true;
        nextBtn.textContent = 'Next Question \u2192';
    }
}

function selectOption(btn, selectedKey) {
    if (hasAnswered) return;
    hasAnswered = true;

    const q = currentQuestions[currentIndex];
    const correctKey = q.answer;

    userAnswers[currentIndex] = selectedKey;

    const allBtns = optionsContainer.querySelectorAll('.option-btn');
    allBtns.forEach(b => {
        b.style.cursor = 'default';
        const k = b.innerHTML.match(/<strong>(.*?)<\/strong>/i)[1].toLowerCase();
        if (k === correctKey) {
            b.classList.add('correct');
        }
    });

    if (selectedKey !== correctKey) {
        btn.classList.add('wrong');
    }

    // Recalculate score
    score = Object.keys(userAnswers).reduce((acc, idx) => {
        return acc + (userAnswers[idx] === currentQuestions[idx].answer ? 1 : 0);
    }, 0);
    currentScoreDisplay.textContent = score;

    nextBtn.disabled = false;
    if (currentIndex === currentQuestions.length - 1) {
        nextBtn.textContent = 'Finish Test';
    } else {
        nextBtn.textContent = 'Next Question \u2192';
    }
}

prevBtn.onclick = () => {
    if (currentIndex > 0) {
        currentIndex--;
        loadQuestion();
    }
};

nextBtn.onclick = () => {
    if (currentIndex < currentQuestions.length - 1) {
        currentIndex++;
        loadQuestion();
    } else {
        showResults();
    }
};

function showResults() {
    progressBar.style.width = '100%';
    setTimeout(() => {
        switchScreen(resultScreen);
        finalScoreVal.textContent = score;
        totalQuestionsVal.textContent = currentQuestions.length;

        const percentage = score / currentQuestions.length;
        if (percentage >= 0.8) {
            resultMessage.textContent = "Excellent! You are definitely ready for the interview.";
            resultMessage.style.color = "var(--success)";
        } else if (percentage >= 0.5) {
            resultMessage.textContent = "Good job, but there's room for improvement.";
            resultMessage.style.color = "var(--accent)";
        } else {
            resultMessage.textContent = "You need more practice. Review the core concepts thoroughly.";
            resultMessage.style.color = "var(--danger)";
        }
    }, 300);
}

backBtn.onclick = () => switchScreen(homeScreen);
homeBtn.onclick = () => {
    switchScreen(homeScreen);
};

// Start
init();
