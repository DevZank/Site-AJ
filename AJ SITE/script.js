
window.sr = ScrollReveal({ reset: true });

// Initial
sr.reveal('.text-about', { rotate: { x: 0, y: 80, z: 0}, duration: 1200 });
sr.reveal('.square-image', { duration: 1500 });
sr.reveal('.Photo1', { duration: 2000 });

// What We Do
sr.reveal('.div-title-what-we-do', { rotate: { x: 0, y: 700, z: 0}, duration: 1500 });
sr.reveal('.square-box', { rotate: { x: 0, y: 80, z: 0}, duration: 2000 });
sr.reveal('.square-box1', { rotate: { x: 90, y: 0, z: 0}, duration: 2000 });
sr.reveal('.button-we-do', { duration: 1500 });

// Info Div
sr.reveal('.title-info', { rotate: { x: 0, y: 700, z: 0}, duration: 1500 });
sr.reveal('.img-info', { rotate: { x: 100, y: 0, z: 0}, duration: 1500 });
sr.reveal('.img-logo', { rotate: { x: 0, y: 0, z: 0}, duration: 2000 });
sr.reveal('.txt-logoW', { rotate: { x: 0, y: 80, z: 0}, duration: 3000 });
sr.reveal('.txt-logoI', { rotate: { x: 0, y: 80, z: 0}, duration: 3000 });
sr.reveal('.txt-logoF', { rotate: { x: 0, y: 80, z: 0}, duration: 3000 });

// Jobs
sr.reveal('.title-job', { rotate: { x: 0, y: 80, z: 0}, duration: 1500 });
sr.reveal('.squares1', { rotate: { x: 0, y: 160, z: 0}, duration: 2000 });
sr.reveal('.squares2', { rotate: { x: 0, y: -160, z: 0}, duration: 2000 });

ScrollReveal().reveal(target, options);