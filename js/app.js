// Focusing screen on the presentation just in case
const presentation = document.getElementById('main');
const moveIntoView = () => {
  presentation.scrollIntoView();
};
window.addEventListener('load', moveIntoView());

// Proyects Title and Social Bar Animation
const socialBar = document.querySelector('[data-socialBar]');
const gitHubIcon = document.querySelector('[data-gitHub]');
const linkedInIcon = document.querySelector('[data-linkedIn]');
const emailIcon = document.querySelector('[data-email]');
const instagramIcon = document.querySelector('[data-instagram]');
const proyectsTitle = document.querySelector('[data-proyectsTitle]');
const showProyectsTitleAndSocialBar = (entries) => {
  entries.forEach((entries) => {
    if (entries.isIntersecting) {
      gsap.fromTo(entries.target, {opacity: 0, x: -80000}, {opacity: 1, x: 0, ease: 'circ'});
      gsap.fromTo(socialBar, {opacity: 0, x: -80000}, {opacity: 1, x: 0, ease: 'circ', duration: 3});
      gsap.fromTo(gitHubIcon, {opacity: 0, x: -80000}, {opacity: 1, x: 0, ease: 'circ', duration: 3.2});
      gsap.fromTo(linkedInIcon, {opacity: 0, x: -80000}, {opacity: 1, x: 0, ease: 'circ', duration: 3.4});
      gsap.fromTo(emailIcon, {opacity: 0, x: -80000}, {opacity: 1, x: 0, ease: 'circ', duration: 3.6});
      gsap.fromTo(instagramIcon, {opacity: 0, x: -80000}, {opacity: 1, x: 0, ease: 'circ', duration: 3.8});
      observerProyectsTitleAndSocialBar.disconnect();
    };
  });
};
const observerProyectsTitleAndSocialBar = new IntersectionObserver(showProyectsTitleAndSocialBar, {
  root: null,
  rootMargin: '0px',
  threshold: 1.0
});
observerProyectsTitleAndSocialBar.observe(proyectsTitle);

// IntersectionObserver for proyects fade in
const proyect1 = document.querySelector('[data-proyect1]');
const proyect2 = document.querySelector('[data-proyect2]');
const proyect3 = document.querySelector('[data-proyect3]');
const proyectsTitle1 = document.querySelector('[data-proyectsTitle1]');
const proyectsTitle2 = document.querySelector('[data-proyectsTitle2]');
const proyectsTitle3 = document.querySelector('[data-proyectsTitle3]');
const video1 = document.querySelector('[data-video1]');
const video2 = document.querySelector('[data-video2]');
const video3 = document.querySelector('[data-video3]');
const video4 = document.querySelector('[data-video4]');
const video5 = document.querySelector('[data-video5]');
const video6 = document.querySelector('[data-video6]');
const proyectsLink1 = document.querySelector('[data-proyectsLink1]');
const proyectsLink2 = document.querySelector('[data-proyectsLink2]');
const proyectsLink3 = document.querySelector('[data-proyectsLink3]');
const proyectsLink4 = document.querySelector('[data-proyectsLink4]');
const proyectsLink5 = document.querySelector('[data-proyectsLink5]');
const proyectsLink6 = document.querySelector('[data-proyectsLink6]');

const showProyect1 = (entries) => {
  entries.forEach((entries) => {
    if (entries.isIntersecting) {
      gsap.fromTo(entries.target, {opacity: 0, x: 50000}, {opacity: 1, x: 0, ease: 'circ', duration: 0.7});
      gsap.fromTo(video1, {opacity: 0, x: -500000}, {opacity: 1, x: -50, ease: 'circ', duration: 0.8});
      gsap.fromTo(video2, {opacity: 0, x: -500000}, {opacity: 1, x: 40, y: -30, ease: 'circ', duration: 0.9});
      gsap.fromTo(proyectsTitle1, {opacity: 0, x: -800000}, {opacity: 1, x: 0, ease: 'circ', duration: 1.2});
      gsap.fromTo(proyectsLink1, {opacity: 0, x: -200000}, {opacity: 1, x: 0, ease: 'bounce.out', duration: 1.8});
      gsap.fromTo(proyectsLink2, {opacity: 0, x: 200000}, {opacity: 1, x: 0, ease: 'bounce.out', duration: 1.8});
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
      gsap.fromTo(entries.target, {opacity: 0, x: -50000}, {opacity: 1, x: 0, ease: 'circ', duration: 0.7});
      gsap.fromTo(video3, {opacity: 0, x: 500000}, {opacity: 1, x: 50, ease: 'circ', duration: 0.8});
      gsap.fromTo(video4, {opacity: 0, x: 500000}, {opacity: 1, x: -40, y: -30, ease: 'circ', duration: 0.9});
      gsap.fromTo(proyectsTitle2, {opacity: 0, x: 800000}, {opacity: 1, x: 0, ease: 'circ', duration: 1.2});
      gsap.fromTo(proyectsLink3, {opacity: 0, x: -200000}, {opacity: 1, x: 0, ease: 'bounce.out', duration: 1.8});
      gsap.fromTo(proyectsLink4, {opacity: 0, x: 200000}, {opacity: 1, x: 0, ease: 'bounce.out', duration: 1.8});
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
      gsap.fromTo(entries.target, {opacity: 0, x: 50000}, {opacity: 1, x: 0, ease: 'circ', duration: 0.7});
      gsap.fromTo(video5, {opacity: 0, x: -500000}, {opacity: 1, x: -50, ease: 'circ', duration: 0.8});
      gsap.fromTo(video6, {opacity: 0, x: -500000}, {opacity: 1, x: 40, y: -30, ease: 'circ', duration: 0.9});
      gsap.fromTo(proyectsTitle3, {opacity: 0, x: -800000}, {opacity: 1, x: 0, ease: 'circ', duration: 1.2});
      gsap.fromTo(proyectsLink5, {opacity: 0, x: -200000}, {opacity: 1, x: 0, ease: 'bounce.out', duration: 1.8});
      gsap.fromTo(proyectsLink6, {opacity: 0, x: 200000}, {opacity: 1, x: 0, ease: 'bounce.out', duration: 1.8});
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

// // Auto scroll from proyect to contact
// const autoScrollProyectsTitle = () => {
//   setTimeout(() => {
//     proyectsTitle.scrollIntoView({
//       behavior: "smooth",
//       block: "center"
//     });
//   }, 7800);
// };
// autoScrollProyectsTitle();

// const autoScrollProyect1 = () => {
//   setTimeout(() => {
//     proyect1.scrollIntoView({
//       behavior: "smooth",
//       block: "center"
//     });
//   }, 9500);
// };
// autoScrollProyect1();

// const autoScrollProyect2 = () => {
//   setTimeout(() => {
//     proyect2.scrollIntoView({
//       behavior: "smooth",
//       block: "center"
//     });
//   }, 19000);
// };
// autoScrollProyect2();

// const autoScrollProyect3 = () => {
//   setTimeout(() => {
//     proyect3.scrollIntoView({
//       behavior: "smooth",
//       block: "center"
//     });
//   }, 29000);
// };
// autoScrollProyect3();

// const autoScrollAboutMe = () => {
//   setTimeout(() => {
//     aboutMe.scrollIntoView({
//       behavior: "smooth",
//       block: "start"
//     });
//   }, 39000);
// };
// autoScrollAboutMe();

// const autoScrollSkillsTitle = () => {
//   setTimeout(() => {
//     htmlIcon.scrollIntoView({
//       behavior: "smooth",
//       block: "center"
//     });
//   }, 48000);
// };
// autoScrollSkillsTitle();

// const autoScrollSkeleton = () => {
//   setTimeout(() => {
//     submitBtn.scrollIntoView({
//       behavior: "smooth",
//       block: "center"
//     });
//   }, 56000);
// };
// autoScrollSkeleton();

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

// Abot Me Animation
const aboutMe = document.querySelector('[data-aboutMe]');
const showAboutMe = (event) => {
  event.forEach((event) => {
    if (event.isIntersecting) {
      gsap.fromTo(aboutMe, {opacity: 0, x: 900000}, {opacity: 1, x: 0, ease: 'circ'});
      observerAboutMe.disconnect()
    };
  });
};
const observerAboutMe = new IntersectionObserver(showAboutMe, {
  root: null,
  rootMargin: '0px',
  threshold: 0.5
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
      gsap.fromTo(skillsTitle, {opacity: 0, x: -2000}, {opacity: 1, x: 0, ease: 'circ', delay: 1, duration: 1});
      gsap.fromTo(htmlIcon, {opacity: 0, x: -2000}, {opacity: 1, x: 0, ease: 'back.out(0.7)', duration: 1.2});
      gsap.fromTo(cssIcon, {opacity: 0, x: -4000}, {opacity: 1, x: 0, ease: 'back.out(0.7)', duration: 1.2});
      gsap.fromTo(jsIcon, {opacity: 0, x: -6000}, {opacity: 1, x: 0, ease: 'back.out(0.7)', duration: 1.2});
      gsap.fromTo(reactIcon, {opacity: 0, x: -8000}, {opacity: 1, x: 0, ease: 'back.out(0.7)', duration: 1.2});
      gsap.fromTo(gitIcon, {opacity: 0, x: -10000}, {opacity: 1, x: 0, ease: 'back.out(0.7)', duration: 1.2});
      observerIcons.disconnect();
    };
  });
};
const observerIcons = new IntersectionObserver(showIcons, {
  root: null,
  rootMargin: '0px',
  threshold: 1
});
observerIcons.observe(skillsTitle);

// Contact animations
const contactTitle = document.querySelector('[data-contact-title]');
const skeleton = document.querySelector('[data-skeleton]');
const label1 = document.querySelector('[data-label1]');
const label2 = document.querySelector('[data-label2]');
const label3 = document.querySelector('[data-label3]');
const inputName = document.querySelector('[data-input-name]');
const inputEmail = document.querySelector('[data-input-email]');
const inputMsg = document.querySelector('[data-input-msg]');
const submitBtn = document.querySelector('[data-submit]');

const showContactInfo = (event) => {
  event.forEach((event) => {
    if (event.isIntersecting) {
      gsap.fromTo(contactTitle, {opacity: 0, x: 10000}, {opacity: 1, x: 0});
      gsap.fromTo(skeleton, {opacity: 0}, {opacity: 1, delay: 2});
      gsap.fromTo(label1, {opacity: 0, x: -100000}, {opacity: 1, x: 0, duration: 0.5});
      gsap.fromTo(label2, {opacity: 0, x: -100000}, {opacity: 1, x: 0, duration: 0.8});
      gsap.fromTo(label3, {opacity: 0, x: -100000}, {opacity: 1, x: 0, duration: 1});
      gsap.fromTo(inputName, {opacity: 0, x: 100000}, {opacity: 1, x: 0, duration: 1});
      gsap.fromTo(inputEmail, {opacity: 0, x: 100000}, {opacity: 1, x: 0, duration: 1.3});
      gsap.fromTo(inputMsg, {opacity: 0, x: 100000}, {opacity: 1, x: 0, duration: 1.6});
      gsap.fromTo(submitBtn, {opacity: 0}, {opacity: 1, duration: 2});
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        gsap.fromTo(socialBar, {display: 'none', opacity: 0, x: -8000}, {display: 'flex', opacity: 1, x: 0, ease: 'circ', duration: 1});
        gsap.fromTo(gitHubIcon, {opacity: 0, x: -8000}, {opacity: 1, x: 0, ease: 'circ', duration: 1.2});
        gsap.fromTo(linkedInIcon, {opacity: 0, x: -8000}, {opacity: 1, x: 0, ease: 'circ', duration: 1.4});
        gsap.fromTo(emailIcon, {opacity: 0, x: -8000}, {opacity: 1, x: 0, ease: 'circ', duration: 1.6});
        gsap.fromTo(instagramIcon, {opacity: 0, x: -8000}, {opacity: 1, x: 0, ease: 'circ', duration: 1.8});
      };
      observerContact.disconnect();
    };
  });
};
const observerContact = new IntersectionObserver(showContactInfo, {
  root: null,
  rootMargin: '0px',
  threshold: 1.0
});
observerContact.observe(submitBtn);

