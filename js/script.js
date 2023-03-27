var hamburger = document.querySelector('.hamburger');
var menu = document.querySelector('.meny');
var pythonExternal = document.querySelector('#python_external');
var python = document.querySelector('#python');
var ruby = document.querySelector('#ruby');
var rubyExternal = document.querySelector('#ruby_external');
var elixir = document.querySelector('#elixir');
var elixirExternal = document.querySelector('#elixir_external');
hamburger === null || hamburger === void 0 ? void 0 : hamburger.addEventListener('click', function () {
    hamburger === null || hamburger === void 0 ? void 0 : hamburger.classList.toggle('open');
    menu === null || menu === void 0 ? void 0 : menu.classList.toggle('open');
});
pythonExternal === null || pythonExternal === void 0 ? void 0 : pythonExternal.addEventListener('click', function () {
    python === null || python === void 0 ? void 0 : python.classList.toggle('open');
});
rubyExternal === null || rubyExternal === void 0 ? void 0 : rubyExternal.addEventListener('click', function () {
    ruby === null || ruby === void 0 ? void 0 : ruby.classList.toggle('open');
});
elixirExternal === null || elixirExternal === void 0 ? void 0 : elixirExternal.addEventListener('click', function () {
    elixir === null || elixir === void 0 ? void 0 : elixir.classList.toggle('open');
});
