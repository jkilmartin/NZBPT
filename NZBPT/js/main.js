// Variables
var burger = document.querySelector('.burger');
var nav = document.querySelector('#' + burger.dataset.target);

// Bulma Responsive Nav
burger.addEventListener('click', function(){
  burger.classList.toggle('is-active');
  nav.classList.toggle('is-active');
});