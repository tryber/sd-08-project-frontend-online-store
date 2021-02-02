import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import SearchBar from './SearchBar';

export default class Header extends React.Component {
  render() {
    const { getQuery, getItems } = this.props;
    return (
      <header>
        <SearchBar onChange={ getQuery } onClick={ getItems } />
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

Header.propTypes = {
  getQuery: PropTypes.func.isRequired,
  getItems: PropTypes.func.isRequired,
};
