// JavaScript Document
const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const header = document.querySelector('.header .container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
});
