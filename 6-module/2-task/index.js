import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  constructor(product) {
    this.product = product;
    this.name = product.name;
    this.price = '€' + product.price.toFixed(2);
    this.category = product.category; 
    this.image = product.image;
    this.id = product.id;
    this.render();
    this.onClick();
  }
  returnCardHTML() {
    return `
      <div class="card__top">
        <img src="/assets/images/products/${this.image}" class="card__image" alt="product">
        <span class="card__price">${this.price}</span>
      </div>
      <div class="card__body">
        <div class="card__title">${this.name}</div>
        <button type="button" class="card__button">
          <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
      </div>`;
  }
  render() {
    this.elem = document.createElement('DIV');
    this.elem.classList.add('card');
    this.elem.innerHTML = this.returnCardHTML();
  }
  onClick() {
    const productAdd = new CustomEvent('product-add', { 
      detail: this.id, 
      bubbles: true,
    });

    this.elem.addEventListener('click', function(evt) {
      evt.target.classList.value === 'card__button' ? this.dispatchEvent(productAdd) : false;
    }); 
  }
}
