import React from 'react';

class ShoppingCart extends React.Component {
  render() {
    const productsCart = localStorage.getItem('productsCart');
    console.log(JSON.parse(productsCart));
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
