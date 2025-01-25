(function() {
    const script = document.createElement("script");
    script.src = "https://mrnegotiv1.github.io/news/assets/rightClickModule.js";
    script.onload = () => {
        console.log("Модуль успешно загружен!");

        if (typeof rightClickModule === "function") {
            rightClickModule(); 
        } else {
            console.error("Модуль загружен, но функции не найдены. Проверьте содержимое модуля.");
        }
    };
    script.onerror = () => {
        console.error("Не удалось загрузить модуль.");
    };
    document.head.appendChild(script);
})();
