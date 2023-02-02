const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.meny');
const python = document.querySelector('#python');

hamburger?.addEventListener('click', () => {
  hamburger?.classList.toggle('open');
  menu?.classList.toggle('open');
});

python?.addEventListener('click', () => {
  python?.classList.toggle('open');
});
