import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as LocalStorage from '../services/apiLocalStorage';

import ShoppingCartList from '../components/ShoppingCartList';

export default class ShoppingCart extends Component {
  constructor() {
    super();
    this.removeItem = this.removeItem.bind(this);
    this.addSubButton = this.addSubButton.bind(this);
    this.state = {
      cart: LocalStorage.readCart(),
    };
  }

  removeItem(productId) {
    let { cart } = this.state;
    cart = cart.filter(({ id }) => id !== productId);
    this.setState({ cart },
      () => {
        LocalStorage.saveCart(cart);
      });
  }

  async addSubButton(productId, operation) {
    const minQtd = 0;
    const { cart } = this.state;
    const index = cart.findIndex(({ id }) => id === productId);

    if (operation === 'add') {
      cart[index].qtd += 1;
    } else if (operation === 'sub' && cart[index].qtd > minQtd) {
      cart[index].qtd -= 1;
    }
    if (cart[index].amount <= minQtd) {
      this.removeItem(cart[index].id);
    }
    this.setState({ cart }, () => {
      LocalStorage.saveCart(cart);
    });
  }

  render() {
    const { cart } = this.state;
    return (
      <div>
        <h1>Seu Carrinho de Compras</h1>
        {cart ? cart.map(({ id, thumbnail, title, price, qtd }) => (<ShoppingCartList
          key={ id }
          id={ id }
          image={ thumbnail }
          price={ price }
          title={ title }
          qtd={ qtd }
          removeItem={ this.removeItem }
          addSubButton={ this.addSubButton }
        />))
          : (
            <span data-testid="shopping-cart-empty-message">
              Seu carrinho está vazio
            </span>)}
        <Link to="/Payment" data-testid="checkout-products">Finalizar Compra</Link>
      </div>
    );
  }
}
