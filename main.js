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

// Инициализация анимаций появления
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Эффект печатной машинки
const typewriterElement = document.getElementById('typewriter');
const fullText = "WO MIND";
let charIndex = 0;

function type() {
    if (charIndex < fullText.length) {
        let currentChar = fullText.charAt(charIndex);
        
        if (charIndex >= 2) { // После "WO" начинаем красить в красный (MIND)
            typewriterElement.innerHTML += `<span class="highlight">${currentChar}</span>`;
        } else {
            typewriterElement.innerHTML += currentChar;
        }
        
        charIndex++;
        setTimeout(type, 200);
    }
}

// Запуск машинки при загрузке
window.addEventListener('load', type);

// Логика работы формы
const scriptURL = 'ТВОЯ_ССЫЛКА_GOOGLE_SCRIPT'; // Сюда вставь ссылку после настройки Google Таблиц
const form = document.getElementById('womind-form');
const btn = document.getElementById('submit-btn');

form.addEventListener('submit', e => {
    e.preventDefault();
    
    btn.disabled = true;
    btn.innerText = 'СКАНИРОВАНИЕ...';

    const formData = new FormData(form);

    fetch(scriptURL, { method: 'POST', body: formData })
        .then(response => {
            btn.innerText = 'ДОСТУП РАЗРЕШЕН';
            btn.style.background = '#C5A055'; // Золотой при успехе
            form.reset();
            setTimeout(() => {
                btn.disabled = false;
                btn.innerText = 'ОТПРАВИТЬ ДАННЫЕ';
                btn.style.background = '#ffffff';
            }, 5000);
        })
        .catch(error => {
            console.error('Ошибка!', error.message);
            // Даже если скрипт не настроен, имитируем отправку для теста
            btn.innerText = 'ГОТОВО (DEMO)';
            setTimeout(() => {
                btn.disabled = false;
                btn.innerText = 'ОТПРАВИТЬ ДАННЫЕ';
            }, 3000);
        });
});

// Заглушка для квизов
function openQuiz(type) {
    const messages = {
        'archetype': 'Запуск модуля АРХЕТИП. Анализ визуальных кодов...',
        'mindset': 'Запуск модуля МЫШЛЕНИЕ. Поиск дефицитарных паттернов...',
        'visual': 'Запуск модуля ВИЗУАЛ. Оценка эстетики Old Money...'
    };
    alert(messages[type] || 'Модуль загружается...');
}

// Плавный скролл для навигации
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

