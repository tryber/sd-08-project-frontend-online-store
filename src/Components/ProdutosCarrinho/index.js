import React, { Component } from 'react';

export default class ProdutosCarrinho extends Component {
  constructor() {
    super();
    this.state = {
      products: JSON.parse(localStorage.getItem('PRODUTOS')),
    };
  }

  getTotal() {
    const { products } = this.state;
    return products.reduce((total, product) => {
      const { price, quantity } = product;
      return total + (price * quantity);
    }, 0);
  }

  render() {
    const { products } = this.state;
    return (
      <>
        {products.map((product) => {
          const { title, thumbnail, price, quantity } = product;

          return (
            <>
              <img src={ `${thumbnail}` } alt="product" />
              <p data-testid="shopping-cart-product-name">{title}</p>
              <p>{price}</p>
              <div data-testid="shopping-cart-product-quantity">{quantity}</div>

            </>
          );
        })}
        <div>{this.getTotal()}</div>
      </>
    );
  }
}
