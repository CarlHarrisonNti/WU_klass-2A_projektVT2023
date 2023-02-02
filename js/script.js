var hamburger = document.querySelector('.hamburger');
var menu = document.querySelector('.meny');
var python = document.querySelector('#python');
hamburger === null || hamburger === void 0 ? void 0 : hamburger.addEventListener('click', function () {
    hamburger === null || hamburger === void 0 ? void 0 : hamburger.classList.toggle('open');
    menu === null || menu === void 0 ? void 0 : menu.classList.toggle('open');
});
python === null || python === void 0 ? void 0 : python.addEventListener('click', function () {
    python === null || python === void 0 ? void 0 : python.classList.toggle('open');
});
