import React, { Component } from 'react';
import ReturnButoon from '../components/ReturnButton';

class PageShoppingCart extends Component {
  render() {
    return (
      <>
        <span data-testid="shopping-cart-empty-message">Seu carrinho está vazio</span>
        <span />
        <ReturnButoon />

      </>
    );
  }
}

export default PageShoppingCart;
