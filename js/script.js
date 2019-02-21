var slides = document.querySelectorAll('.promo-slider-list .promo-slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,4000);

/*
var servSlides = document.querySelectorAll('.service-slider-list .service-slide');
var currentServSlide = 0;
var servSlideInterval = setInterval(nextServSlide,2000);
*/

function nextSlide() {
  slides[currentSlide].className = 'promo-slide';
  currentSlide = (currentSlide+1)%slides.length;
  slides[currentSlide].className = 'promo-slide showing';
}
/*
function nextServSlide() {
  servSlides[currentServSlide].className = 'service-slide';
  currentServSlide = (currentServSlide+1)%servSlides.length;
  servSlides[currentServSlide].className = 'service-slide showing';
}
*/

var link = document.querySelector(".feedback-button");
var popup = document.querySelector(".contact-us");
var close = document.querySelector(".feedback-close");
var userName = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");
var message = popup.querySelector("[name=message]");
var form = popup.querySelector(".modal-form");

var mapLink = document.querySelector(".map-link");
var map = document.querySelector(".map");
var mapClose = document.querySelector(".map-close");


link.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");
	userName.focus();
}); 

form.addEventListener("submit", function (evt) {
	if (!userName.value) {
		evt.preventDefault();
		popup.classList.add("modal-error");
	};
});

close.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
}); 

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
		if (popup.classList.contains("modal-show")) {
			popup.classList.remove("modal-show");
		}
		if (map.classList.contains("modal-show")) {
			map.classList.remove("modal-show");
		}
	}
});



mapLink.addEventListener("click", function (evt) {
	evt.preventDefault();
	map.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
	evt.preventDefault();
	map.classList.remove("modal-show");
}); 


