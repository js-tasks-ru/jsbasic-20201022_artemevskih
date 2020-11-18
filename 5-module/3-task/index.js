function initCarousel() {
  // ваш код...
  const carousel = document.querySelector('.carousel');
  const carouselInner = carousel.querySelector('.carousel__inner'); 
  const rightArrow = carousel.querySelector('.carousel__arrow_right');
  const leftArrow = carousel.querySelector('.carousel__arrow_left');
  const slides = carouselInner.querySelectorAll('.carousel__slide');
  const carouselInnerWidth = carouselInner.offsetWidth;
  let position = 0;

  leftArrow.style.display = 'none'; 

  rightArrow.addEventListener('click', () => {
    leftArrow.style.display = '';
    position < carouselInnerWidth * (slides.length - 1) ? position += carouselInnerWidth : position;
    position === carouselInnerWidth * (slides.length - 1) ? rightArrow.style.display = 'none' : false;
    carouselInner.style.transform = 'translateX(-' + position + 'px)';
  });

  leftArrow.addEventListener('click', () => {
    rightArrow.style.display = '';
    position > 0 ? position -= carouselInnerWidth : position;
    position === 0 ? leftArrow.style.display = 'none' : false;
    carouselInner.style.transform = 'translateX(-' + position + 'px)';
  });
}
