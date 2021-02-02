import { findAllByTitle } from '@testing-library/react';
import React, { Component } from 'react';

class AddToCart extends Component {
  constructor() {
    super();

    this.setLocalStorage = this.setLocalStorage.bind(this);
  }

  setLocalStorage() {
    const { prop } = this.props;
    const { title, thumbnail, price, installments } = prop;
    const { quantity } = installments;
    // const storageItem = (`<li>
    //   <img src='${thumbnail}' />
    //   <p data-testid="shopping-cart-product-name">'${title}'</p>
    //   <p data-testid="shopping-cart-product-quantity">${quantity}</p>
    //   <p>'R$ ${price.toFixed(2)}'</p>
    // </li>`);

    localStorage.setItem('cart', prop);
    console.log(quantity);
  }

  render() {
    return (

      <div>
        <button
          type="button"
          onClick={ this.setLocalStorage }
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

export default AddToCart;
