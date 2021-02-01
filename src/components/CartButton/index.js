import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import styles from './styles.module.css';

class CartButton extends Component {
  render() {
    return (
      <Link to="/cart" data-testid="shopping-cart-button">
        <IconContext.Provider value={ { className: styles.cartButton } }>
          <AiOutlineShoppingCart />
        </IconContext.Provider>
      </Link>
    );
  }
}

export default CartButton;
