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

  render() {
    const { product, showDetails, children } = this.props;
    const { title, thumbnail, price } = product;

    return (
      <div className={ styles.productCard } data-testid="product">
        <p
          data-testid="product-detail-name"
          className={ styles.productCardTitle }
        >
          { title }
        </p>
        <img
          className={ styles.productCardImage }
          src={ thumbnail }
          alt={ title }
        />
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
  }).isRequired,
  showDetails: PropTypes.bool,
  handleAddToCart: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export default ProductCard;
