import React from 'react';
import { Link } from 'react-router-dom';

import SearchBar from './SearchBar';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <input type="text" name="query" />
        <button type="button">Pesquisar</button>
        <span>Digite algum termo de pesquisa ou escolha uma categoria</span>
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
