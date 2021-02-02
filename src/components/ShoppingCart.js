import React from 'react';

class ShoppingCart extends React.Component {
  constructor() {
    super();

    const cart = JSON.parse(localStorage.getItem('cart'));
    this.state = {
      cart,
    };
  }

  render() {
    console.log();
    const test = localStorage.length;
    const { cart } = this.state;
    if (test === 0) {
      return (
        <p data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </p>);
    }
    return (<p>
      {cart.map((cartelement) => (
        <h2>
          {cartelement.title}
        </h2>
      ))}
            </p>);
  }
}
export default ShoppingCart;
