import React from 'react';

class ShoppingCart extends React.Component {
  render() {
    const productsCart = JSON.parse(localStorage.getItem('productsCart'));
    return (
      <div>
        <h1 data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </h1>
      </div>
    );
  }
}

export default ShoppingCart;
