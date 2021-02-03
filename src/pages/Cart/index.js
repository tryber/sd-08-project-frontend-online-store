import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { CartButton, BackButton, CartItems } from '../../components';
import Header from '../../components/Header';

import styles from './styles.module.css';

class Cart extends Component {
  render() {
    const { cart, handleIncrease, handleDecrease,
      handleRemove, getCartItemsQuantity } = this.props;
    return (
      <div className={ styles.cart }>
        <Header>
          <BackButton />
          <CartButton getCartItemsQuantity={ getCartItemsQuantity } />
          <span className={ styles.buttonMessage }>Carrinho de compras</span>
        </Header>
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
  getCartItemsQuantity: PropTypes.func.isRequired,
};

export default Cart;
