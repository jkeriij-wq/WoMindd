AOS.init();

// Типизация текста
const typewriter = document.getElementById('typewriter');
let text = "WOMIND // EVOLUTION";
let i = 0;

function type() {
    if (i < text.length) {
        typewriter.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 100);
    }
}
window.onload = type;

// Квиз функции
function openQuiz(type) {
    const modal = document.getElementById('quiz-modal');
    const content = document.getElementById('quiz-content');
    modal.style.display = 'block';
    
    let currentQuestions = quizData[type];
    content.innerHTML = `<h3>${type.toUpperCase()}</h3>`;
    currentQuestions.forEach((q, idx) => {
        content.innerHTML += `<p>${q.question}</p>`;
        // Здесь можно добавить логику выбора ответов
    });
}

function closeQuiz() {
    document.getElementById('quiz-modal').style.display = 'none';
}

// Отправка формы
const scriptURL = 'ТВОЯ_ССЫЛКА_GOOGLE_SCRIPT';
const form = document.getElementById('google-sheet-form');

form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = document.getElementById('submit-btn');
    btn.innerText = 'СКАНИРОВАНИЕ...';
    
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(() => {
            btn.innerText = 'ГОТОВО';
            form.reset();
        })
        .catch(error => console.error('Error!', error.message));
});
