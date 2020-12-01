import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    
    this.render();
    this.move();    
  }
  render() {    
    if (!this.elem) this.elem = document.createElement('div');
    this.elem.classList.add('ribbon');

    this.elem.append(this.createArrow('left'));
    this.elem.append(this.createNav(this.categories));
    this.elem.append(this.createArrow('right', true));
  }
  createNav(links) {
    const nav = document.createElement('nav');

    nav.classList.add('ribbon__inner');

    links.forEach((element, index) => {
      const link = document.createElement('a');

      link.classList.add('ribbon__item');
      index === 0 ? link.classList.add('ribbon__item_active') : false;
      link.dataset.id = element.id;
      link.innerHTML = element.name;      

      nav.append(link);
    });

    const allItems = nav.querySelectorAll('.ribbon__item');

    nav.addEventListener('click', (evt) => {
      evt.preventDefault();

      allItems.forEach(item => {
        item.classList.remove('ribbon__item_active');
      });

      if (evt.target.classList.contains('ribbon__item')) {
        this.elem.dispatchEvent(new CustomEvent('ribbon-select', {
          detail: evt.target.dataset.id,
          bubbles: true
        }));
        evt.target.classList.add('ribbon__item_active');
      };
    });
    
    return nav;
  }
  createArrow(direction, visible) {
    const arrow = document.createElement('button');

    arrow.classList.add('ribbon__arrow', 'ribbon__arrow_' + direction);
    visible ? arrow.classList.add('ribbon__arrow_visible') : false;

    arrow.innerHTML = `<img src="../../assets/images/icons/angle-icon.svg" alt="icon">`;

    return arrow;
  }
  move() {
    const nav = this.elem.querySelector('.ribbon__inner');
    const rightArrow = this.elem.querySelector('.ribbon__arrow_right');
    const leftArrow = this.elem.querySelector('.ribbon__arrow_left');    

    rightArrow.addEventListener('click', () => {
      nav.scrollBy(350, 0);           
    });

    leftArrow.addEventListener('click', () => {
      nav.scrollBy(-350, 0);
    });

    nav.addEventListener('scroll', () => {
      let scrollRight = nav.scrollWidth - nav.scrollLeft - nav.clientWidth;

      if (scrollRight === 0) {
        rightArrow.classList.remove('ribbon__arrow_visible');
        rightArrow.removeEventListener('click', () => {});
      } else {
        rightArrow.classList.add('ribbon__arrow_visible');
      }

      if (nav.scrollLeft > 0) {
        leftArrow.classList.add('ribbon__arrow_visible');        
      } else {
        leftArrow.classList.remove('ribbon__arrow_visible');
        leftArrow.removeEventListener('click', () => {});
      }
    });
  }
}
