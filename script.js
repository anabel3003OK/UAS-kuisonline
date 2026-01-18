const quizData = [
    {
        question: "Kapan Indonesia memproklamasikan kemerdekaannya?",
        options: ["17 Agustus 1945", "20 Mei 1908", "1 Juni 1945", "10 November 1945"],
        correct: 0
    },
    {
        question: "Siapakah tokoh yang membacakan teks proklamasi?",
        options: ["Moh. Hatta", "Soekarno", "Sutan Syahrir", "Jenderal Sudirman"],
        correct: 1
    },
    {
        question: "Di kota manakah teks proklamasi dibacakan?",
        options: ["Bandung", "Surabaya", "Yogyakarta", "Jakarta"],
        correct: 3
    },
    {
        question: "Siapa penjahit bendera Merah Putih yang pertama?",
        options: ["R.A. Kartini", "Fatmawati", "Cut Nyak Dien", "Dewi Sartika"],
        correct: 1
    },
    {
        question: "Apa nama dasar negara Indonesia?",
        options: ["UUD 1945", "Burung Garuda", "Pancasila", "Bhinneka Tunggal Ika"],
        correct: 2
    }
];

let currentQuiz = 0;
let score = 0;

const questionEl = document.getElementById('question');
const optionsContainer = document.getElementById('options-container');
const quizHeader = document.getElementById('quiz-header');
const resultContainer = document.getElementById('result-container');
const scoreText = document.getElementById('score-text');
const statusBadge = document.getElementById('status-badge');

function loadQuiz() {
    optionsContainer.innerHTML = '';
    const currentData = quizData[currentQuiz];
    questionEl.innerText = currentData.question;

    currentData.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.innerText = option;
        button.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    if (selectedIndex === quizData[currentQuiz].correct) {
        score += 20; // Skor +20 sesuai permintaan
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        showResults();
    }
}

function showResults() {
    quizHeader.classList.add('hidden');
    resultContainer.classList.remove('hidden');

    scoreText.innerText = score;

    // Sesuai ketentuan: Lulus jika skor > 70
    if (score > 70) {
        statusBadge.innerText = "SELAMAT! ANDA LULUS";
        statusBadge.className = "pass";
    } else {
        statusBadge.innerText = "MAAF, ANDA TIDAK LULUS";
        statusBadge.className = "fail";
    }
}

function restartQuiz() {
    currentQuiz = 0;
    score = 0;
    quizHeader.classList.remove('hidden');
    resultContainer.classList.add('hidden');
    loadQuiz();
}

// Menjalankan kuis pertama kali
loadQuiz();