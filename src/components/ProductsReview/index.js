import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ProductsReviewItem from '../ProductsReviewItem';

import styles from './styles.module.css';

class ProductsReview extends Component {
  render() {
    const { cart } = this.props;
    const total = Object.values(cart)
      .map(({ item: { price }, quantity }) => price * quantity)
      .reduce((acc, cur) => acc + cur, 0);

    return (
      <div className={ styles.productsReview }>
        <h2 className={ styles.title }>Revise seus produtos</h2>
        { Object.values(cart).map(({ item }) => item)
          .map((item, index) => (
            <ProductsReviewItem
              key={ index }
              product={ item }
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
};

export default ProductsReview;
