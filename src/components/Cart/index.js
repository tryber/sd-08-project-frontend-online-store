import React, { Component } from 'react';

class Cart extends Component {
  render() {
    return (
      <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
    );
  }
}

export default Cart;
