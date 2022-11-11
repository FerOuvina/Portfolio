// Timer for redirectioning to the portfolio site
const timer = () => {
  setTimeout(() => {
    location.assign('./Portfolio.html');
  }, 6800);
}
window.addEventListener('load', timer());

// Showing the animation on desktop or the welcome screen on mobile
const main = document.querySelector('.main');
const loadingContainer = document.querySelector('.loading__container');
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
  main.style.display = 'flex';
  loadingContainer.style.display = 'none';
} else {
  main.style.display = 'none';
  loadingContainer.style.display = 'flex';
};