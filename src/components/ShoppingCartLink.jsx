import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import shopCartImg from '../carrinho-de-compras.png';

class ShoppingCartLink extends React.Component {
  render() {
    const { cart } = this.props;

    return (
      <Link
        to={ {
          pathname: '/shopping-cart',
          state: { cart } } }
        data-testid="shopping-cart-button"
      >
        <img
          alt="carrinho de compras"
          className="cart-icon"
          src={ shopCartImg }
        />
      </Link>
    );
  }
}

ShoppingCartLink.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object),
};

ShoppingCartLink.defaultProps = {
  cart: [],
};

export default ShoppingCartLink;
