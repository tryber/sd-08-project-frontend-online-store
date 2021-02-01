import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

class CartProductCard extends Component {
  render() {
    const { product, quantity, handleIncrease,
      handleDecrease, handleRemove } = this.props;
    const { title } = product;
    return (
      <div className={ styles.cartProductCard }>
        <div className={ styles.infos }>
          <p
            data-testid="shopping-cart-product-name"
            className={ styles.title }
          >
            { title }
          </p>
          <p data-testid="shopping-cart-product-quantity">{ quantity }</p>
        </div>
        <div className={ styles.controls }>
          <button
            onClick={ () => handleIncrease(product) }
            type="button"
            data-testid="product-increase-quantity"
          >
            +
          </button>
          <button
            onClick={ () => handleDecrease(product) }
            type="button"
            data-testid="product-decrease-quantity"
          >
            -
          </button>
          <button
            onClick={ () => handleRemove(product) }
            type="button"
          >
            Remover
          </button>
        </div>
      </div>
    );
  }
}

CartProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
  }).isRequired,
  quantity: PropTypes.number.isRequired,
  handleIncrease: PropTypes.func.isRequired,
  handleDecrease: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default CartProductCard;
