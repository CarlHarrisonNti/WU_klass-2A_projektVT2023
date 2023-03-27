const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.meny');
const pythonExternal = document.querySelector('#python_external');
const python = document.querySelector('#python');
const ruby = document.querySelector('#ruby');
const rubyExternal = document.querySelector('#ruby_external');
const elixir = document.querySelector('#elixir');
const elixirExternal = document.querySelector('#elixir_external');

hamburger?.addEventListener('click', () => {
  hamburger?.classList.toggle('open');
  menu?.classList.toggle('open');
});

pythonExternal?.addEventListener('click', () => {
  python?.classList.toggle('open');
});

rubyExternal?.addEventListener('click', () => {
  ruby?.classList.toggle('open');
});

elixirExternal?.addEventListener('click', () => {
  elixir?.classList.toggle('open');
});
