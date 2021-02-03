import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

class ProductCard extends Component {
  renderDetailsLink() {
    const { product, handleAddToCart } = this.props;
    const { id } = product;
    return (
      <Link
        data-testid="product-detail-link"
        to={ {
          pathname: `/product/${id}`,
          product,
          handleAddToCart,
        } }
        className={ styles.showDetails }
      >
        Mostrar detalhes
      </Link>
    );
  }

  renderFreeShipping() {
    return (
      <div
        data-testid="free-shipping"
        className={ styles.freeShipping }
      >
        Frete grátis
      </div>
    );
  }

  render() {
    const { product, showDetails, children } = this.props;
    const { title, thumbnail, price } = product;
    const { shipping: { free_shipping: freeShipping } } = product;

    return (
      <div className={ styles.productCard } data-testid="product">
        <p
          data-testid="product-detail-name"
          className={ styles.productCardTitle }
        >
          { title }
        </p>
        <div className={ styles.imageWrapper }>
          <img
            className={ styles.productCardImage }
            src={ thumbnail }
            alt={ title }
          />
          { freeShipping && this.renderFreeShipping() }
        </div>
        <p className={ styles.price }>
          R$
          { price }
        </p>
        { showDetails && this.renderDetailsLink() }
        { children }
      </div>
    );
  }
}

ProductCard.defaultProps = {
  showDetails: true,
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
    shipping: PropTypes.shape({
      free_shipping: PropTypes.bool,
    }),
  }).isRequired,
  showDetails: PropTypes.bool,
  handleAddToCart: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export default ProductCard;
