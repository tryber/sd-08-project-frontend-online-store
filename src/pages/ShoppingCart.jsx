import React from 'react';

class ShoppingCart extends React.Component {
  render() {
    return (
      <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
    );
  }
}

export default ShoppingCart;
