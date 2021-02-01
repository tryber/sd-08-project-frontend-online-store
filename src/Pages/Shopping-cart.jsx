import React from 'react';

class ShoppingCart extends React.Component {
  constructor() {
    super();

    this.renderProducts = this.renderProducts.bind(this);
  }

  renderProducts() {
    const productsLocalStorage = Object.values(localStorage);
    const products = productsLocalStorage.map((element) => JSON.parse(element));
    return (
      <div>
        { products.map((element) => (
          <div key={ element.id }>
            <img src={ element.thumbnail } alt="Product" />
            <span data-testid="shopping-cart-product-name">{element.title}</span>
            <span data-testid="shopping-cart-product-quantity">1</span>
            <span>{element.price}</span>
          </div>
        ))}
      </div>
    );
  }

  render() {
    if (localStorage.length === 0) {
      return (
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      );
    }
    if (localStorage.length > 0) {
      console.log('entrei no render');
      return (
        <div>
          Shopping Cart
          { this.renderProducts() }
        </div>
      );
    }
  }
}

export default ShoppingCart;
