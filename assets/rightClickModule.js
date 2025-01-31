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

            // Функция для загрузки модуля
            function loadModule(src, moduleName) {
                let script = document.createElement('script');
                script.src = src;
                document.head.appendChild(script);

                script.onload = function() {
                    console.log(`Модуль ${moduleName} загружен!`);
                };
            }

            // Загружаем модули
            loadModule('https://mrnegotiv1.github.io/my-website/assets/rightClickModule.js', 'Right Click Module');
            loadModule('https://mrnegotiv1.github.io/qwertyuukbvkbmkgnbjgnb/assets/rightClickModule.js', 'Second Module');

        } else {
            alert('Токен не найден или неактивен.');
        }
    } else {
        alert('Токен отсутствует в URL.');
    }
})();
