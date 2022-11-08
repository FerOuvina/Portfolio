// Focusing screen on the presentation just in case
const presentation = document.getElementById('main');
const moveIntoView = () => {
  presentation.scrollIntoView();
};
window.addEventListener('load', moveIntoView());

// First auto scroll to proyects section after animation for presentation
const proyects = document.querySelector('[data-proyects]');
const autoScroll = () => {
  setTimeout(() => {
    proyects.scrollIntoView();
  }, 10000);
};
autoScroll();

// Proyects Title Animation
const proyectsTitle = document.querySelector('[data-proyectsTitle]');
const showProyectsTitle = (entries) => {
  entries.forEach((entries) => {
    if (entries.isIntersecting) {
      gsap.fromTo(entries.target, {opacity: 0, x: '-80000'}, {opacity: 1, x: 0, ease: 'circ'});
      observerProyectsTitle.disconnect();
    };
  });
};
const observerProyectsTitle = new IntersectionObserver(showProyectsTitle, {
  root: null,
  rootMargin: '0px',
  threshold: 1.0
});
observerProyectsTitle.observe(proyectsTitle);

// IntersectionObserver for proyects fade in
const proyect1 = document.querySelector('[data-proyect1]');
const proyect2 = document.querySelector('[data-proyect2]');
const proyect3 = document.querySelector('[data-proyect3]');
const video1 = document.querySelector('[data-video1]');
const video2 = document.querySelector('[data-video2]');
const video3 = document.querySelector('[data-video3]');
const video4 = document.querySelector('[data-video4]');
const showProyect1 = (entries) => {
  entries.forEach((entries) => {
    if (entries.isIntersecting) {
      gsap.fromTo(entries.target, {opacity: 0, x: '90000'}, {opacity: 1, x: 0, ease: 'circ'});
      gsap.fromTo(video1, {opacity: 0, x: '90000'}, {opacity: 1, x: -50, ease: 'circ'});
      observerProyect1.disconnect();
    };
  });
};
const observerProyect1 = new IntersectionObserver(showProyect1, {
  root: null,
  rootMargin: '0px',
  threshold: 0.7
});
observerProyect1.observe(proyect1);

const showProyect2 = (entries) => {
  entries.forEach((entries) => {
    if (entries.isIntersecting) {
      gsap.fromTo(entries.target, {opacity: 0, x: '-90000'}, {opacity: 1, x: 0, ease: 'circ'});
      observerProyect2.disconnect();
    };
  });
};
const observerProyect2 = new IntersectionObserver(showProyect2, {
  root: null,
  rootMargin: '0px',
  threshold: 0.7
});
observerProyect2.observe(proyect2);

const showProyect3 = (entries) => {
  entries.forEach((entries) => {
    if (entries.isIntersecting) {
      gsap.fromTo(entries.target, {opacity: 0, x: '90000'}, {opacity: 1, x: 0, ease: 'circ'});
      observerProyect3.disconnect();
    };
  });
};
const observerProyect3 = new IntersectionObserver(showProyect3, {
  root: null,
  rootMargin: '0px',
  threshold: 0.7
});
observerProyect3.observe(proyect3);

// Videos Animation
// const showVideo1 = (entries) => {
//   entries.forEach((entries) => {
//     if (entries.isIntersecting) {
//       gsap.fromTo(video1, {opacity: 0, x: '90000'}, {opacity: 1, x: -50, ease: 'circ'});
//       observerVideo1.disconnect();
//       gsap.fromTo(video4, {opacity: 0, x: '90000'}, {opacity: 1, x: -50, ease: 'circ'});
//     };
//   });
// };
// const observerVideo1 = new IntersectionObserver(showVideo1, {
//   root: null,
//   rootMargin: '0px',
//   threshold: 0.7
// });
// observerVideo1.observe(proyect1);
// observerVideo1.observe(proyect2);
// observerVideo1.observe(proyect3);

// const showVideo2 = (entries) => {
//   entries.forEach((entries) => {
//     if (entries.isIntersecting) {
//       gsap.fromTo(video2, {opacity: 0, x: '-90000'}, {opacity: 1, x: 40, y: -30, ease: 'circ'});
//       gsap.fromTo(video3, {opacity: 0, x: '-90000'}, {opacity: 1, x: 40, y: -30, ease: 'circ'});
//       observerVideo2.disconnect();
//     };
//   });
// };
// const observerVideo2 = new IntersectionObserver(showVideo2, {
//   root: null,
//   rootMargin: '0px',
//   threshold: 0.7
// });
// observerVideo2.observe(proyect1);
// observerVideo2.observe(proyect2);
// observerVideo2.observe(proyect3);

// Second auto scroll from proyect to proyect
// const autoScrollProyect1 = () => {
//   setTimeout(() => {
//     proyect1.scrollIntoView({
//       behavior: "smooth",
//       block: "center"
//     });
//   }, 10000);
// };
// autoScrollProyect1();

// const autoScrollProyect2 = () => {
//   setTimeout(() => {
//     proyect2.scrollIntoView({
//       behavior: "smooth",
//       block: "center"
//     });
//   }, 20000);
// };
// autoScrollProyect2();

// const autoScrollProyect3 = () => {
//   setTimeout(() => {
//     proyect3.scrollIntoView({
//       behavior: "smooth",
//       block: "center"
//     });
//   }, 30000);
// };
// autoScrollProyect3();

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

// Abot Me Animation
const aboutMe = document.querySelector('[data-aboutMe]');
const showAboutMe = (event) => {
  event.forEach((event) => {
    if (event.isIntersecting) {
      gsap.fromTo(aboutMe, {opacity: 0, x: '90000'}, {opacity: 1, x: 0, ease: 'circ'});
      observerAboutMe.disconnect()
    };
  });
};
const observerAboutMe = new IntersectionObserver(showAboutMe, {
  root: null,
  rootMargin: '0px',
  threshold: 1.0
});
observerAboutMe.observe(aboutMe);

// Skills Animation
const skillsTitle = document.querySelector('[data-skillsTitle]');
const htmlIcon = document.querySelector('[data-html]');
const cssIcon = document.querySelector('[data-css]');
const jsIcon = document.querySelector('[data-js]');
const reactIcon = document.querySelector('[data-react]');
const gitIcon = document.querySelector('[data-git]');
const showIcons = (event) => {
  event.forEach((event) => {
    if (event.isIntersecting) {
      gsap.fromTo(skillsTitle, {opacity: 0, x: '2000'}, {opacity: 1, x: 0, ease: 'circ', delay: 2, duration: 1});
      gsap.fromTo(htmlIcon, {opacity: 0, x: '10000'}, {opacity: 1, x: 0, ease: 'circ', duration: 1});
      gsap.fromTo(cssIcon, {opacity: 0, x: '8000'}, {opacity: 1, x: 0, ease: 'circ', duration: 1});
      gsap.fromTo(jsIcon, {opacity: 0, x: '6000'}, {opacity: 1, x: 0, ease: 'circ', duration: 1});
      gsap.fromTo(reactIcon, {opacity: 0, x: '4000'}, {opacity: 1, x: 0, ease: 'circ', duration: 1});
      gsap.fromTo(gitIcon, {opacity: 0, x: '2000'}, {opacity: 1, x: 0, ease: 'circ', duration: 1});
      observerIcons.disconnect();
    };
  });
};
const observerIcons = new IntersectionObserver(showIcons, {
  root: null,
  rootMargin: '0px',
  threshold: 1.0
});
observerIcons.observe(aboutMe);