import React from 'react';

class ShoppingCart extends React.Component {
  render() {
    return (
      <h4 data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </h4>
    );
  }
}

export default ShoppingCart;
