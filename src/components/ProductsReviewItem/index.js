import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import ProductControls from '../ProductControls';

import styles from './styles.module.css';

class ProductsReview extends Component {
  render() {
    const { cartItem, handleRemove, handleIncrease, handleDecrease } = this.props;
    const { item: product, quantity } = cartItem;
    const { title, price, thumbnail, id } = product;
    return (
      <div className={ styles.productReviewItem }>
        <img
          src={ thumbnail }
          className={ styles.thumbnail }
          alt={ title }
        />
        <p className={ styles.title }>{ title }</p>
        <p className={ styles.price }>
          R$
          { (price * quantity).toFixed(2) }
        </p>
        <ProductControls
          handleIncrease={ handleIncrease }
          handleDecrease={ handleDecrease }
          handleRemove={ handleRemove }
          product={ product }
        />
        <p className={ styles.quantity }>{ quantity }</p>
        <Link
          data-testid="product-detail-link"
          to={ {
            pathname: `/product/${id}`,
            product,
          } }
          className={ styles.showDetails }
        >
          Mostrar detalhes
        </Link>
      </div>
    );
  }
}

ProductsReview.propTypes = {
  cartItem: PropTypes.shape({
    item: PropTypes.shape({
      title: PropTypes.string,
      price: PropTypes.number,
      id: PropTypes.string,
      thumbnail: PropTypes.string,
    }),
    quantity: PropTypes.number.isRequired,
    order: PropTypes.number.isRequired,
  }).isRequired,
  handleIncrease: PropTypes.func.isRequired,
  handleDecrease: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default ProductsReview;
