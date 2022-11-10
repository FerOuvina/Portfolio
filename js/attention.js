const timer = () => {
  setTimeout(() => {
    location.assign('./Portfolio.html');
  }, 7000);
}
window.addEventListener('load', timer());