// Navigation bar script with dynamic toggle section highlighting.
let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')
menuIcon.onclick =() =>{
  menuIcon.classList.toggle('fa-x')
  navbar.classList.toggle('active')
}
// Script for navigation bar with dynamically highlighted scrolling section

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });
      document.querySelector("header nav a[href*=" + id + "]").classList.add('active');
    }
  });

// Script for navigation bar with dynamically highlighted sticky navbar to enhance website navigation and user experience.
let header = document.querySelector('header');
header.classList.toggle('sticky' , window.scrollY > 100)
// Navigation bar script with dynamic remove section highlighting.
menuIcon.classList.remove('fa-x')
navbar.classList.remove('active')
};
//  scroll reveal
ScrollReveal({ 
  // reset: true,
  distance : '80px',
  duration : 2000,
  delay : 100
 });
 ScrollReveal().reveal('.home-contant , .heading', { origin: 'top' });
 ScrollReveal().reveal('.home-img ,  .services-container , .portfolio-box ,  .contact form', { origin: 'bottom' });
 ScrollReveal().reveal('.home-contant h1 , .about-img', { origin: 'left' });
 // ScrollReveal().reveal('.home-contant p , .about-content', { origin: 'right' });
 //  typed js
 var typed = new Typed('.multiple-text', {
  strings: ["Student",  "Frontend Developer","Python Developer","Web Developer","Data Analytics"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
