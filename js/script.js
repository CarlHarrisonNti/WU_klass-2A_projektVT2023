var hamburger = document.querySelector('.hamburger');
var menu = document.querySelector('.meny');
var python = document.querySelector('#python');
var ruby = document.querySelector('#ruby');
var elixir = document.querySelector('#elixir');
hamburger === null || hamburger === void 0 ? void 0 : hamburger.addEventListener('click', function () {
    hamburger === null || hamburger === void 0 ? void 0 : hamburger.classList.toggle('open');
    menu === null || menu === void 0 ? void 0 : menu.classList.toggle('open');
});
python === null || python === void 0 ? void 0 : python.addEventListener('click', function () {
    python === null || python === void 0 ? void 0 : python.classList.toggle('open');
});
ruby === null || ruby === void 0 ? void 0 : ruby.addEventListener('click', function () {
    ruby === null || ruby === void 0 ? void 0 : ruby.classList.toggle('open');
});

elixir === null || elixir === void 0 ? void 0 : elixir.addEventListener('click', function () {
    elixir === null || elixir === void 0 ? void 0 : elixir.classList.toggle('open');
});
