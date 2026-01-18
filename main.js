// Инициализация анимаций AOS
AOS.init({ 
    duration: 1000, 
    once: true 
});

// Эффект печатной машинки
const typewriter = document.getElementById('typewriter');
const textToType = "WOMIND // EVOLUTION";
let charIndex = 0;

function type() {
    if (charIndex < textToType.length) {
        typewriter.innerHTML += textToType.charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    }
}

// Запускаем печать при загрузке страницы
window.onload = type;

// Логика квиза
const quizData = {
    archetype: [{ question: "Какой образ вам ближе: Эстет или Правитель?" }],
    mindset: [{ question: "Как вы реагируете на крупные траты?" }],
    visual: [{ question: "Ваша лента: минимализм или детализация?" }]
};

function openQuiz(type) {
    const modal = document.getElementById('quiz-modal');
    const content = document.getElementById('quiz-content');
    modal.style.display = 'block';
    
    let currentQuestions = quizData[type];
    content.innerHTML = `
        <h3 style="font-family: 'Syncopate'; color: #C5A055; margin-bottom: 20px;">
            ${type.toUpperCase()} DIAGNOSTICS
        </h3>
    `;
    
    currentQuestions.forEach((q) => {
        content.innerHTML += `
            <p style="margin-bottom: 20px;">${q.question}</p>
            <button class="submit-btn" onclick="closeQuiz()" style="padding: 10px 20px;">НАЧАТЬ АНАЛИЗ</button>
        `;
    });
}

function closeQuiz() {
    document.getElementById('quiz-modal').style.display = 'none';
}

// Отправка формы в Google Sheets (или Vercel Function)
const scriptURL = 'ТВОЯ_ССЫЛКА_GOOGLE_SCRIPT'; 
const form = document.getElementById('google-sheet-form');

form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = document.getElementById('submit-btn');
    btn.innerText = 'СКАНИРОВАНИЕ...';
    btn.disabled = true;
    
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(() => {
            btn.innerText = 'ГОТОВО';
            form.reset();
            setTimeout(() => {
                btn.innerText = 'ОТПРАВИТЬ ДАННЫЕ';
                btn.disabled = false;
            }, 3000);
        })
        .catch(error => {
            console.error('Error!', error.message);
            btn.innerText = 'ОШИБКА';
            btn.disabled = false;
        });
});
