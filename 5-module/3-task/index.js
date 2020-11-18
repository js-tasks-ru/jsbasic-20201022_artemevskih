function initCarousel() {
  // ваш код...
  const carousel = document.querySelector('.carousel');
  const carouselInner = carousel.querySelector('.carousel__inner'); 
  const rightArrow = carousel.querySelector('.carousel__arrow_right');
  const leftArrow = carousel.querySelector('.carousel__arrow_left');
  const slides = carouselInner.querySelectorAll('.carousel__slide');
  const carouselWidth = carouselInner.offsetWidth;
  let position = 0;

  leftArrow.style.display = 'none'; 

  rightArrow.addEventListener('click', () => {
    leftArrow.style.display = '';
    position < carouselWidth * (slides.length - 1) ? position += carouselWidth : position;
    position === carouselWidth * (slides.length - 1) ? rightArrow.style.display = 'none' : false;
    carouselInner.style.transform = 'translateX(-' + position + 'px)';
  });

  leftArrow.addEventListener('click', () => {
    rightArrow.style.display = '';
    position > 0 ? position -= carouselWidth : position;
    position === 0 ? leftArrow.style.display = 'none' : false;
    carouselInner.style.transform = 'translateX(-' + position + 'px)';
  });
}
