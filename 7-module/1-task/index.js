import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.render();
    this.move();
  }
  render() {
    const container = document.querySelector('.container');
    
    if (!this.elem) this.elem = document.createElement('div');
    this.elem.classList.add('ribbon');

    this.elem.append(this.createArrow('left', true));
    this.elem.append(this.createNav(this.categories));
    this.elem.append(this.createArrow('right', true));

    container.append(this.elem);
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
    
    return nav;
  }
  createArrow(direction, visible) {
    const arrow = document.createElement('button');

    arrow.classList.add('ribbon__arrow', 'ribbon__arrow_' + direction);
    visible ? arrow.classList.add('ribbon__arrow_visible') : false;

    arrow.innerHTML = `<img src="/assets/images/icons/angle-icon.svg" alt="icon">`;

    return arrow;
  }
  move() {
    const nav = document.querySelector('.ribbon__inner');

    this.elem.addEventListener('click', evt => {
      if (evt.target
            .classList.contains('ribbon__arrow_right') 

          || 

          evt.target
            .parentElement.classList
            .contains('ribbon__arrow_right')) {

        nav.scrollBy( 350, 0 );

      };
      if (evt.target
            .classList.contains('ribbon__arrow_left') 
            
          || 
          
          evt.target
            .parentElement.classList
            .contains('ribbon__arrow_left')) {

        nav.scrollBy( -350 , 0 );

      };
    });
  }
}
