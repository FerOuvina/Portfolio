// Focusing screen on the presentation just in case
const presentation = document.getElementById('main');
const moveIntoView = () => {
  presentation.scrollIntoView();
};
window.addEventListener('load', moveIntoView());

// First auto scroll to proyects section after animation for presentation
const autoScroll = () => {
  let proyects = document.querySelector('[data-proyects]');
  setTimeout(() => {
    proyects.scrollIntoView();
  }, 10000);
};
autoScroll();

// IntersectionObserver for proyects fade in/out
const proyect1 = document.querySelector('[data-proyect1]');
const proyect2 = document.querySelector('[data-proyect2]');
const proyect3 = document.querySelector('[data-proyect3]');

const showProyect = (entries) => {
  entries.forEach((entries) => {
    if (entries.isIntersecting) {
      gsap.fromTo(entries.target, {opacity: 0, x: '9000'}, {opacity: 1, x: 0, ease: 'circ'});
    } else {
      gsap.fromTo(entries.target, {opacity: 1}, {opacity: 0});
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

// Second auto scroll from proyect to proyect
const autoScrollProyect1 = () => {
  setTimeout(() => {
    proyect1.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  }, 10000);
};
autoScrollProyect1();

const autoScrollProyect2 = () => {
  setTimeout(() => {
    proyect2.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  }, 20000);
};
autoScrollProyect2();

const autoScrollProyect3 = () => {
  setTimeout(() => {
    proyect3.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  }, 30000);
};
autoScrollProyect3();

// Showing the navbar
const contact = document.querySelector('[data-contact]');
const navbar = document.querySelector('[data-navbar]');

const showNavbar = (event) => {
  event.forEach((event) => {
    if (event.isIntersecting) {
      navbar.style.opacity = 1;
    };
  });
};

const observerNavbar = new IntersectionObserver(showNavbar, {
  root: null,
  rootMargin: '0px',
  threshold: 0.5
});
observerNavbar.observe(contact);

// Moving the navbar depending on wich proyects is on screen
const moveNavbarRight = (event) => {
  let clientWidth = document.getElementById('body').clientWidth;
  let elementWidth = navbar.clientWidth;
  event.forEach((event) => {
    if (event.isIntersecting) {
      gsap.to(navbar, {x: clientWidth - elementWidth, delay: 1});
    };
  });
};

const observerNavbarRight = new IntersectionObserver(moveNavbarRight, {
  root: null,
  rootMargin: '0px',
  threshold: 0.8
});
observerNavbarRight.observe(proyect2);

const moveNavbarLeft = (event) => {
  event.forEach((event) => {
    if (event.isIntersecting) {
      gsap.to(navbar, {x: '0vw', delay: 1});
    };
  });
};

const observerNavbarLeft = new IntersectionObserver(moveNavbarLeft, {
  root: null,
  rootMargin: '0px',
  threshold: 0.8
});
observerNavbarLeft.observe(proyect1);
observerNavbarLeft.observe(proyect3);