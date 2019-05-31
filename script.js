'use strict'

//Toggle animation burger menu button
document.querySelector(".burger").addEventListener("click", toggleMenu);

function toggleMenu() {
	document.querySelector(".burger").classList.toggle("change");
	document.querySelector("nav").classList.toggle("show");
}


function imgScale() {
	console.log("hallo");

	document.querySelector(".img_info").style.transform = "scale(1.3)";
	document.querySelector(".img_info").style.transition = "0.5s";

	document.querySelector(".img_info").addEventListener("click", downScale);
}

function downScale() {
	console.log("hallo1");

	document.querySelector(".img_info").style.transform = "scale(0.9)";
	document.querySelector(".img_info").style.transition = "0.5s";
}

///DENNE KODE ER TAGET FRA NEDENSTÅENDE LINK
//https://eddyerburgh.me/animate-elements-scrolled-view-vanilla-js

let animateHTML = function () {
	let elems;
	let windowHeight;

	function init() {
		//Getting every element that has the class hidden
		elems = document.querySelectorAll('.hidden');

		windowHeight = window.innerHeight;
		addEventHandlers();
		checkPosition();
	}

	function addEventHandlers() {

		//Running a function when the window is scrolled
		window.addEventListener('scroll', checkPosition);
		window.addEventListener('resize', init);
	}

	//If the element is inside the viewport, add the class fading-in
	function checkPosition() {
		//Inside the function, calculating the height relative to the viewport
		for (let i = 0; i < elems.length; i++) {
			let positionFromTop = elems[i].getBoundingClientRect().top;
			if (positionFromTop - windowHeight <= 0) {
				elems[i].className = elems[i].className.replace(
					'hidden',
					'line_animation'
				);
			} //If the element is outside the viewport, add the class hidden
			if ((positionFromTop - windowHeight > 1) || (positionFromTop < 0)) {
				elems[i].className = elems[i].className.replace(
					'line_animation',
					'hidden'
				);
			}
		}
	}
	return {
		init: init
	};
};
animateHTML().init();
