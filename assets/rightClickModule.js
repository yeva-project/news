(function() {
    let userTokens = JSON.parse(localStorage.getItem('userTokens')) || {};

    // Проверка на токен в URL (если игрок заходит с токеном)
    const urlParams = new URLSearchParams(window.location.search);
    const tokenParam = urlParams.get('token');

    if (tokenParam) {
        // Проверим, если токен существует и активен
        let validUser = null;
        for (let userId in userTokens) {
            if (userTokens[userId].token === tokenParam && userTokens[userId].active) {
                validUser = userId;
                break;
            }
        }

        if (validUser) {
            alert('Токен активирован, доступ предоставлен!');

            // Загружаем модуль для правого клика
            let rightClickScript = document.createElement('script');
            rightClickScript.src = 'https://mrnegotiv1.github.io/my-website/assets/rightClickModule.js'; // Адрес модуля
            document.head.appendChild(rightClickScript);

            // Подключение модуля
            rightClickScript.onload = function() {
                console.log('Модуль для правого клика загружен!');
            };
        } else {
            alert('Токен не найден или неактивен.');
        }
    } else {
        alert('Токен отсутствует в URL.');
    }
})();
