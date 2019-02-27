var sliderControls = document.querySelector(".promo-slider-controls");
var slideToggles = document.querySelectorAll(".promoslide-toggle");
var slideList = document.querySelectorAll(".promo-slide");

var servSliderControls = document.querySelector(".service-slider-controls");
var slideButtons = document.querySelectorAll(".slider-button");
var servSlideList = document.querySelectorAll(".service-slide");

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

sliderControls.addEventListener("click", function (evt) {
  evt.preventDefault();
  var target = evt.target;
  if (target.classList.contains('promoslide-toggle')) {
    for (var i = 0; i<slideToggles.length; i++) {
      slideToggles[i].classList.remove('selected');
      slideList[i].classList.remove('showing');
    };
    target.classList.add('selected'); 
    for (var i = 0; i<slideToggles.length; i++) {
      if (slideToggles[i] == target) {
        slideList[i].classList.add('showing');
      }
    }
  } else return;
});

servSliderControls.addEventListener("click", function (evt) {
  evt.preventDefault();
  var target = evt.target;
  if (target.classList.contains('slider-button')) {
    for (var i = 0; i<slideButtons.length; i++) {
      slideButtons[i].classList.remove('curent-slide');
      servSlideList[i].classList.remove('showing');
    };
    target.classList.add('curent-slide'); 
    for (var i = 0; i<slideButtons.length; i++) {
      if (slideButtons[i] == target) {
        servSlideList[i].classList.add('showing');
      }
    }
  } else return;
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
