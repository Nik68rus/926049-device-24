var slide1 = document.querySelector(".promo-slide1");
var slide2 = document.querySelector(".promo-slide2");
var slide3 = document.querySelector(".promo-slide3");
var slide1Toggle = document.querySelector(".promoslide1-toggle");
var slide2Toggle = document.querySelector(".promoslide2-toggle");
var slide3Toggle = document.querySelector(".promoslide3-toggle");

var deliverySlide = document.querySelector(".delivery-slide");
var warrantySlide = document.querySelector(".warranty-slide");
var creditSlide = document.querySelector(".credit-slide");
var deliveryButton = document.querySelector(".slider-button1");
var warrantyButton = document.querySelector(".slider-button2");
var creditButton = document.querySelector(".slider-button3");


var link = document.querySelector(".feedback-button");
var popup = document.querySelector(".contact-us");
var close = document.querySelector(".feedback-close");
var userName = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");
var message = popup.querySelector("[name=message]");
var form = popup.querySelector(".feedback");

var mapLink = document.querySelector(".map-link");
var map = document.querySelector(".map");
var mapClose = document.querySelector(".map-close");

var isStorageSupport = true;
var storageName = "";
var storageMail = "";

slide1Toggle.addEventListener("click", function (evt) {
	evt.preventDefault();
  slide1Toggle.classList.add("selected");
  slide2Toggle.classList.remove("selected");
  slide3Toggle.classList.remove("selected");
	slide1.classList.add("showing");
	slide2.classList.remove("showing");
	slide3.classList.remove("showing");
});

slide2Toggle.addEventListener("click", function (evt) {
	evt.preventDefault();
  slide1Toggle.classList.remove("selected");
  slide2Toggle.classList.add("selected");
  slide3Toggle.classList.remove("selected");
	slide1.classList.remove("showing");
	slide2.classList.add("showing");
	slide3.classList.remove("showing");
});

slide3Toggle.addEventListener("click", function (evt) {
	evt.preventDefault();
  slide1Toggle.classList.remove("selected");
  slide2Toggle.classList.remove("selected");
  slide3Toggle.classList.add("selected");
	slide1.classList.remove("showing");
	slide2.classList.remove("showing");
	slide3.classList.add("showing");
});

deliveryButton.addEventListener("click", function (evt) {
	evt.preventDefault();
  deliveryButton.classList.add("curent-slide");
  warrantyButton.classList.remove("curent-slide");
  creditButton.classList.remove("curent-slide");
	deliverySlide.classList.add("showing");
	warrantySlide.classList.remove("showing");
	creditSlide.classList.remove("showing");
});

warrantyButton.addEventListener("click", function (evt) {
	evt.preventDefault();
  deliveryButton.classList.remove("curent-slide");
  warrantyButton.classList.add("curent-slide");
  creditButton.classList.remove("curent-slide");
	deliverySlide.classList.remove("showing");
	warrantySlide.classList.add("showing");
	creditSlide.classList.remove("showing");
});

creditButton.addEventListener("click", function (evt) {
	evt.preventDefault();
  deliveryButton.classList.remove("curent-slide");
  warrantyButton.classList.remove("curent-slide");
  creditButton.classList.add("curent-slide");
	deliverySlide.classList.remove("showing");
	warrantySlide.classList.remove("showing");
	creditSlide.classList.add("showing");
});

try {
	storageName = localStorage.getItem("userName");
	storageMail = localStorage.getItem("email");
} catch (err) {
	isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");
	if (storageName) {
		userName.value = storageName;
		email.focus();
	} else {
		userName.focus();
	};
	if (storageMail) {
		email.value = storageMail;
		message.focus();
	} else {
		if (storageName) {
			email.focus();
		} else {
			userName.focus();
		}
	};
}); 

close.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
	popup.classList.remove("modal-error");
}); 

form.addEventListener("submit", function (evt) {
	if (!userName.value||!email.value||!message.value) {
		evt.preventDefault();
		popup.classList.remove("modal-error");
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("modal-error");
	} else {
		if (isStorageSupport) {
			localStorage.setItem("userName", userName.value);
			localStorage.setItem("email", email.value);
		}
	}
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
		if (popup.classList.contains("modal-show")) {
			popup.classList.remove("modal-show");
			popup.classList.remove("modal-error");
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
