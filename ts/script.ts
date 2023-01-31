const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.meny');

hamburger?.addEventListener('click', () => {
  hamburger?.classList.toggle('open');
  menu?.classList.toggle('open');
});
