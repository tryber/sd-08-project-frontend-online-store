import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ProductsReviewItem from '../ProductsReviewItem';

import styles from './styles.module.css';

class ProductsReview extends Component {
  render() {
    const { cart, handleIncrease, handleDecrease, handleRemove } = this.props;
    const total = Object.values(cart)
      .map(({ item: { price }, quantity }) => price * quantity)
      .reduce((acc, cur) => acc + cur, 0);

    return (
      <div className={ styles.productsReview }>
        <h2 className={ styles.title }>Revise seus produtos</h2>
        { Object.values(cart)
          .sort(({ order: orderA }, { order: orderB }) => orderA - orderB)
          .map((cartItem, index) => (
            <ProductsReviewItem
              key={ index }
              cartItem={ cartItem }
              handleIncrease={ handleIncrease }
              handleDecrease={ handleDecrease }
              handleRemove={ handleRemove }
            />)) }
        <div className={ styles.total }>
          <b>Total:</b>
          {' '}
          R$
          { total.toFixed(2) }
        </div>
      </div>
    );
  }
}

ProductsReview.propTypes = {
  cart: PropTypes.shape({
    item: PropTypes.shape({
      title: PropTypes.string,
      price: PropTypes.number,
      id: PropTypes.string,
    }),
    quantity: PropTypes.number,
  }).isRequired,
  handleIncrease: PropTypes.func.isRequired,
  handleDecrease: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default ProductsReview;
