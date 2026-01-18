// 1. Инициализация анимаций появления
AOS.init({ duration: 1000, once: true });

// 2. Эффект печатной машинки
const typewriter = document.getElementById('typewriter');
const text = "WOMIND // EVOLUTION";
let i = 0;

function type() {
    if (typewriter && i < text.length) {
        typewriter.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 120);
    }
}

// Запуск функций после полной загрузки страницы
window.onload = () => {
    type();
};

// 3. Функции Квиза (Модальное окно)
const quizData = {
    archetype: "Анализ Архетипа: Система готова к сканированию вашей ролевой модели.",
    mindset: "Мышление: Подготовка теста на паттерны изобилия и дефицита.",
    visual: "Визуал: Анализ вашего стиля на соответствие Premium сегменту."
};

function openQuiz(type) {
    const modal = document.getElementById('quiz-modal');
    const content = document.getElementById('quiz-content');
    if (modal && content) {
        modal.style.display = 'block';
        content.innerHTML = `
            <h3 style="font-family: 'Syncopate'; color: #C5A055; margin-bottom: 20px;">${type.toUpperCase()}</h3>
            <p style="margin-bottom: 30px; font-size: 14px;">${quizData[type]}</p>
            <button class="submit-btn" onclick="closeQuiz()" style="width: auto; padding: 10px 30px;">ЗАКРЫТЬ</button>
        `;
    }
}

function closeQuiz() {
    document.getElementById('quiz-modal').style.display = 'none';
}

// 4. Логика отправки формы
const scriptURL = 'ТВОЯ_ССЫЛКА_GOOGLE_SCRIPT'; // Вставь сюда ссылку, когда создашь скрипт в таблице
const form = document.getElementById('google-sheet-form');

if (form) {
    form.addEventListener('submit', e => {
        e.preventDefault();
        const btn = document.getElementById('submit-btn');
        btn.innerText = 'СКАНИРОВАНИЕ...';
        btn.disabled = true;

        // Если ссылка не указана, имитируем успех для проверки
        if (scriptURL === 'ТВОЯ_ССЫЛКА_GOOGLE_SCRIPT') {
            setTimeout(() => {
                alert('Данные приняты (Демо-режим). Настройте Google Sheets URL для реальной работы.');
                btn.innerText = 'ГОТОВО';
                form.reset();
                btn.disabled = false;
            }, 2000);
            return;
        }

        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(() => {
                btn.innerText = 'ГОТОВО';
                form.reset();
                setTimeout(() => { btn.innerText = 'ОТПРАВИТЬ ДАННЫЕ'; btn.disabled = false; }, 3000);
            })
            .catch(error => {
                console.error('Error!', error.message);
                btn.innerText = 'ОШИБКА';
                btn.disabled = false;
            });
    });
}
