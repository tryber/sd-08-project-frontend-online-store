import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { IconContext } from 'react-icons';
import { FaBoxOpen } from 'react-icons/fa';

import CartProductCard from '../CartProductCard';

import styles from './styles.module.css';

class CartItems extends Component {
  renderCartItems() {
    const { cart, handleIncrease, handleDecrease, handleRemove } = this.props;
    return (
      <div className={ styles.cartItemsList }>
        { Object.values(cart)
          .sort(({ order: orderA }, { order: orderB }) => orderA - orderB)
          .map(({ item, quantity }) => (
            <CartProductCard
              key={ item.id }
              product={ item }
              quantity={ quantity }
              handleIncrease={ handleIncrease }
              handleDecrease={ handleDecrease }
              handleRemove={ handleRemove }
            />
          )) }
      </div>
    );
  }

  renderEmptyCart() {
    return (
      <>
        <IconContext.Provider value={ { className: styles.emptyCartIcon } }>
          <FaBoxOpen />
        </IconContext.Provider>
        <p data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </p>
      </>
    );
  }

  render() {
    const { cart } = this.props;
    return (
      <div className={ styles.cartItems }>
        { Object.keys(cart).length
          ? this.renderCartItems()
          : this.renderEmptyCart() }
      </div>
    );
  }
}

CartItems.propTypes = {
  cart: PropTypes.objectOf(PropTypes.object).isRequired,
  handleIncrease: PropTypes.func.isRequired,
  handleDecrease: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default CartItems;
