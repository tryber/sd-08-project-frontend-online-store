import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

import Cart from './Cart';

export default class Header extends React.Component {
  constructor() {
    super();

    this.cartButton = this.cartButton.bind(this);
  }

  cartButton() {
    console.log('aa');
  }

  render() {
    return (
      <header className="header">
        <BrowserRouter>
          <div className="logo-title-container">
            <h1>LOGO</h1>
            <h1>NOME DA LOJA</h1>
          </div>
          <h2>SLOGAN</h2>
          <button type="button" onClick={ this.cartButton }> Carrinho </button>
          <Link
            to="/cart"
            component={ Cart }
            data-testid="shopping-cart-button"
          >
            Carrinho
          </Link>
        </BrowserRouter>
      </header>
    );
  }
}
