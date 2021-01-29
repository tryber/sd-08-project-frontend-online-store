import React, { Component } from 'react';

class ShoppingCart extends Component {
  render() {
    if (localStorage.length === 0) {
      return (
        <div>
          <span data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </span>
        </div>
      );
    }
    const productsInCart = JSON.parse(localStorage.products);
    return (
      <div>
        <p data-testid="shopping-cart-product-quantity">
          Quantidade de itens no carrinho:
          { productsInCart.length }
        </p>
        <ul>
          {productsInCart.map((product, index) => (
            <li key={ index }>
              <h3 data-testid="shopping-cart-product-name">{ product.title }</h3>
              <img src={ product.thumbnail } alt="product model" />
              <h4>{ product.price }</h4>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ShoppingCart;
