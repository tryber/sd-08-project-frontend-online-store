import React, { Component } from 'react';
import ReturnButoon from '../components/ReturnButton';

class PageShoppingCart extends Component {
  componentDidMount() {
    this.getKeys();
  }

  getKeys() {
    const keysList = [];
    for (let index = 0; index < localStorage.length; index += 1) {
      const key = localStorage.key(index);
      if (key.includes('Product')) {
        keysList.push(key);
      }
    }
    return keysList;
  }

  getItems(key) {
    const product = JSON.parse(localStorage.getItem(key));
    return (
      <div key={ product.id }>
        <img src={ product.thumbnail } alt={ product.title } />
        <h3 data-testid="shopping-cart-product-name">{ product.title }</h3>
        <p>{ product.price }</p>
        <p>
          Qtd:
          <span data-testid="shopping-cart-product-quantity"> 1</span>
        </p>
      </div>
    );
  }

  render() {
    const keysList = this.getKeys();
    return (
      <>
        <span data-testid="shopping-cart-empty-message">Seu carrinho está vazio</span>
        <span />
        <ReturnButoon />
        {keysList.map((key) => this.getItems(key))}
      </>
    );
  }
}

export default PageShoppingCart;
