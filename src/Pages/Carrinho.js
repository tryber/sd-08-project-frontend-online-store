import React from 'react';

export default class Carrinho extends React.Component {
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
