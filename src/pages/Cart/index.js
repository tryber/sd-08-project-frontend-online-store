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
    // Paulo Simões: Não entendi esse warning, os dados logados nos devtools
    // e no teste são inconsistentes. WTF?!
    // console.log(Array.isArray(cart), cart);
    return (
      <div className={ styles.cart }>
        <Header>
          <div>
            <BackButton />
            <CartButton getCartItemsQuantity={ getCartItemsQuantity } />
            <span className={ styles.buttonMessage }>Carrinho de compras</span>
          </div>
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
