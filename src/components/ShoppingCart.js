import React from 'react';

class ShoppingCart extends React.Component {
  constructor() {
    super();

    this.state = {
      eu: 'ihuu',
    };

    this.setState(localStorage.getItem('cart'));
  }

  render() {
    const test = localStorage.length;
    if (test === 0) {
      return (
        <p data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </p>);
    }
    return (console.log(localStorage.getItem('cart')));
  }
}
export default ShoppingCart;
