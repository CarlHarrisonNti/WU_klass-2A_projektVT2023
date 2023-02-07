const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.meny');
const python = document.querySelector('#python');
const ruby = document.querySelector('#ruby');
const elixir = document.querySelector('#elixir');

hamburger?.addEventListener('click', () => {
  hamburger?.classList.toggle('open');
  menu?.classList.toggle('open');
});

python?.addEventListener('click', () => {
  python?.classList.toggle('open');
});

ruby?.addEventListener('click', () => {
  ruby?.classList.toggle('open');
});

elixir?.addEventListener('click', () => {
  elixir?.classList.toggle('open');
});