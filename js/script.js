var slides = document.querySelectorAll('.promo-slider-list .promo-slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2000);

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