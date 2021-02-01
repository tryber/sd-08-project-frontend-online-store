import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends Component {
  render() {
    const { product } = this.props;
    const { title, thumbnail, price, id } = product;
    return (
      <section data-testid="product">
        <h2>{ title }</h2>
        <img src={ thumbnail } alt="imgThumbnail" />
        <span>{ price }</span>
        <Link
          data-testid="product-detail-link"
          to={ { pathname: `/product-details/${id}`, product } }
        >
          Ver Detalhes
        </Link>
      </section>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
  }).isRequired,
};

export default ProductCard;
