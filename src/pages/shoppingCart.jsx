import React, { Component } from 'react';
import Header from '../components/Header';
import '../styles/shoppingCartStyle.css';

class ShoppingCart extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="shopping-cart-content">
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        </div>
      </div>

    );
  }
}

export default ShoppingCart;
