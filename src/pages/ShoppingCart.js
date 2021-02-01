import React, { Component } from 'react';
import * as LocalStorage from '../services/apiLocalStorage';

import ShoppingCartList from '../components/ShoppingCartList';

export default class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = {
      cart: LocalStorage.readCart(),
    };
  }

  render() {
    const { cart } = this.state;
    return (
      <div>
        <h1>Seu Carrinho de Compras</h1>
        <span data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </span>

        {cart.map(({ id, thumbnail, title, price, qtd }) => (<ShoppingCartList
          key={ id }
          image={ thumbnail }
          price={ price }
          title={ title }
          qtd={ qtd }
        />))}
      </div>
    );
  }
}
