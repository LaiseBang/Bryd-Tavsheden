'use strict'

//Toggle animation burger menu button
document.querySelector(".burger").addEventListener("click", toggleMenu);

function toggleMenu() {
	document.querySelector(".burger").classList.toggle("change");
	document.querySelector("nav").classList.toggle("show");
}
