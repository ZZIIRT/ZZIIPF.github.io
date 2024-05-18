let slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(n) {
  slides.forEach(slide => {
    slide.classList.remove('active');
  });
  slides[n].classList.add('active');
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}
