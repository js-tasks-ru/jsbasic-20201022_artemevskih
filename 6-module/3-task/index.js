import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.render();
    this.move();
    this.slides.forEach(slide => {
      this.onClick(slide);
    })
  }
  render() {
    this.elem = document.createElement('DIV');
    this.elem.classList.add('carousel');
    this.elem.append(this.createArrow('left'));
    this.elem.append(this.createArrow('right'));    
    this.elem.append(this.createSlides());
  }
  createArrow(direction) {
    const arrow = document.createElement('DIV');
    const arrowClass = 'carousel__arrow';
    arrow.classList.add(arrowClass, arrowClass + '_' + direction);
    direction === 'left' ? 
      arrow.innerHTML = `<img src="/assets/images/icons/angle-${direction}-icon.svg" alt="icon">` 
        : arrow.innerHTML = `<img src="/assets/images/icons/angle-icon.svg" alt="icon">`;

    return arrow;
  }
  createSlides() {
    this.elemInner = document.createElement('DIV');
    this.elemInner.classList.add('carousel__inner');
    this.slides.forEach(element => {
      this.elemInner.innerHTML += this.returnSlideHTML(element);
    });

    return this.elemInner;
  }
  returnSlideHTML(slide) {
    return `
      <div class="carousel__slide" data-id="${slide.id}">
        <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
        <div class="carousel__caption">
          <span class="carousel__price">€${slide.price}</span>
          <div class="carousel__title">${slide.name}</div>
          <button type="button" class="carousel__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      </div>
    `;
  }
  move() {      
    const rightArrow = this.elem.querySelector('.carousel__arrow_right');
    const leftArrow = this.elem.querySelector('.carousel__arrow_left');

    leftArrow.style.display = 'none'; 

    let position = 0;
  
    rightArrow.addEventListener('click', () => {
      leftArrow.style.display = '';
      position < this.elemInner.offsetWidth * (this.elemInner.children.length - 1) ? position += this.elemInner.offsetWidth : position;
      position === this.elemInner.offsetWidth * (this.elemInner.children.length - 1) ? rightArrow.style.display = 'none' : false;
      this.elemInner.style.transform = 'translateX(-' + position + 'px)';
    });
  
    leftArrow.addEventListener('click', () => {
      rightArrow.style.display = '';
      position > 0 ? position -= this.elemInner.offsetWidth : position;
      position === 0 ? leftArrow.style.display = 'none' : false;
      this.elemInner.style.transform = 'translateX(-' + position + 'px)';
    });
  }
  onClick(slide) {
    const productAdd = new CustomEvent('product-add', { 
      detail: slide.id, 
      bubbles: true,
    });

    this.elem.addEventListener('click', function(evt) {
      evt.target.classList.value === 'carousel__button' ? this.dispatchEvent(productAdd) : false;
    }); 
  }
}
