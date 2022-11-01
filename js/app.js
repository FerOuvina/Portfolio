const autoScroll = () => {
  let proyects = document.querySelector('[data-proyects]');
  setTimeout(() => {
    proyects.scrollIntoView();
  }, 10000);
};
autoScroll();

const proyect1 = document.querySelector('[data-proyect1]');
const proyect2 = document.querySelector('[data-proyect2]');
const proyect3 = document.querySelector('[data-proyect3]');

const showProyect = (entries) => {
  entries.forEach((entries) => {
    if (entries.isIntersecting) {
      entries.target.style.opacity = 1;
    } else {
      entries.target.style.opacity = 0;
    }
  });
};

const observer = new IntersectionObserver(showProyect, {
  root: null,
  rootMargin: '0px',
  threshold: 1.0
});
observer.observe(proyect1);
observer.observe(proyect2);
observer.observe(proyect3);








