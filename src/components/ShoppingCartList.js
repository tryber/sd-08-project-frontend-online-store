import React, { Component } from 'react';

export default class ShoppingCartList extends Component {
  render() {
    return (
      <span data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </span>
    );
  }
}
