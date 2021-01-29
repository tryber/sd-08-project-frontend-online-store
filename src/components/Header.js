import React from 'react';
import { Link } from 'react-router-dom';

import SearchBar from './SearchBar';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <SearchBar />
        <Link
          to="/shoppingcart"
          data-testid="shopping-cart-button"
        >
          Seu Carrinho de Compras
        </Link>
      </header>
    );
  }
}
