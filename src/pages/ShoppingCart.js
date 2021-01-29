import React, { Component } from 'react';

import ShoppingCartList from '../components/ShoppingCartList';

export default class ShoppingCart extends Component {
  render() {
    return (
      <div>
        <h1>Seu Carrinho de Compras</h1>
        <ShoppingCartList />
      </div>
    );
  }
}
