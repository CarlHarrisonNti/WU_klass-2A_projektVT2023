const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.meny');
hamburger === null || hamburger === void 0 ? void 0 : hamburger.addEventListener('click', function () {
    hamburger === null || hamburger === void 0 ? void 0 : hamburger.classList.toggle('open');
    menu === null || menu === void 0 ? void 0 : menu.classList.toggle('open');
});
