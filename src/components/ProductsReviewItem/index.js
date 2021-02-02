import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

class ProductsReview extends Component {
  render() {
    const { product } = this.props;
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
          { price }
        </p>
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
  product: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
  }).isRequired,
};

export default ProductsReview;
