import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { CartButton, BackButton, CartItems } from '../../components';

import styles from './styles.module.css';

class Cart extends Component {
  render() {
    const { cart, handleIncrease, handleDecrease, handleRemove } = this.props;
    return (
      <div className={ styles.cart }>
        <header className={ styles.header }>
          <BackButton />
          <div className={ styles.cartButton }>
            <CartButton />
            <span className={ styles.buttonMessage }>Carrinho de compras</span>
          </div>
        </header>
        <CartItems
          cart={ cart }
          handleIncrease={ handleIncrease }
          handleDecrease={ handleDecrease }
          handleRemove={ handleRemove }
        />
        <Link
          className={ styles.buy }
          data-testid="checkout-products"
          to="/checkout"
        >
          Finalizar compra
        </Link>
      </div>
    );
  }
}

Cart.propTypes = {
  cart: PropTypes.objectOf(PropTypes.object).isRequired,
  handleIncrease: PropTypes.func.isRequired,
  handleDecrease: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default Cart;
