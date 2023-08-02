
//pagina index, signup e resetpassword
ScrollReveal().reveal('.headline');
ScrollReveal().reveal('.img-animation', {delay: 300});



//pagina de contatos
let titleBanner = document.querySelector('.title-banner');
let cards = document.querySelectorAll('.info');
let form = document.querySelector('#section-form');
let info = document.querySelector('.footer-info');
let img = document.querySelector('.footer-img');

ScrollReveal().reveal(titleBanner, {delay:200, distance:'10px', easing: 'ease-in-out'});
ScrollReveal().reveal(cards, {interval:100, delay:100, scale: 0.95, easing: 'ease-in-out'});
ScrollReveal().reveal(form,{delay:500});
ScrollReveal().reveal(info,{delay:500});
ScrollReveal().reveal(img,{delay:600, distance: '50px',easing: 'ease-in-out' });



