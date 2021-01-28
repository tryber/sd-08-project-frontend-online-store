import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ShoppingCart extends Component {
  render() {
    return (
      <div className="App">
        <p data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio.
        </p>
        <Link to="/">voltar</Link>
      </div>
    );
  }
}

export default ShoppingCart;
