import React from 'react';

class ShoppingCart extends React.Component {
  constructor() {
    super();

    this.state = {
      eu: 'ihuu',
    };
  }

  render() {
    const test = localStorage.length;
    if (test === 0) {
      return (
        <p data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </p>);
    }
    return (localStorage.getItem('cart'));
  }
}
export default ShoppingCart;
