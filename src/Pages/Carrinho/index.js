import React, { Component } from 'react';

export default class Carrinho extends Component {
  constructor() {
    super();

    this.state = {
      products: '',
    };
  }

  render() {
    const { products } = this.state;
    if (!products) {
      return (
        <div data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </div>
      );
    }
  }
}
