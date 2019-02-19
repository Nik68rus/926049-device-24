var slides = document.querySelectorAll('.promo-slider-list .promo-slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2000);

function nextSlide() {
  slides[currentSlide].className = 'promo-slide';
  currentSlide = (currentSlide+1)%slides.length;
  slides[currentSlide].className = 'promo-slide showing';
}
