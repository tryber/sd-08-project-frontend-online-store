import React from 'react';
<<<<<<< HEAD
// import PropTypes from 'prop-types';
=======
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import SearchBar from './SearchBar';
>>>>>>> d526e9b411828c3e55ec368c686ea00cbac25218

export default class Header extends React.Component {
  render() {
    const { getQuery, getItems } = this.props;
    return (
      <header>
<<<<<<< HEAD
        <input
          type="text"
          name="query"
          data-testid="query-input"
        />
        <button type="button">Pesquisar</button>
        <span data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria
        </span>
=======
        <SearchBar onChange={ getQuery } onClick={ getItems } />
        <Link
          to="/shoppingcart"
          data-testid="shopping-cart-button"
        >
          Seu Carrinho de Compras
        </Link>
>>>>>>> d526e9b411828c3e55ec368c686ea00cbac25218
      </header>
    );
  }
}

Header.propTypes = {
  getQuery: PropTypes.func.isRequired,
  getItems: PropTypes.func.isRequired,
};
