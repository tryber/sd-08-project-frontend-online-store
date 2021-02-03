import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import styles from './styles.module.css';

class CartButton extends Component {
  render() {
    const { getCartItemsQuantity } = this.props;
    return (
      <Link
        className={ styles.link }
        to="/cart"
        data-testid="shopping-cart-button"
      >
        <IconContext.Provider value={ { className: styles.cartButton } }>
          <AiOutlineShoppingCart />
        </IconContext.Provider>
        <div
          data-testid="shopping-cart-size"
          className={ styles.shooppingCartSize }
        >
          { getCartItemsQuantity() }
        </div>
      </Link>
    );
  }
}

CartButton.propTypes = {
  getCartItemsQuantity: PropTypes.func.isRequired,
};

export default CartButton;
