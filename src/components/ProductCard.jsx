import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends Component {
  render() {
    const { product, onClick } = this.props;
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
        <Link
          to={ { pathname: '/shopping-cart', product } }
          data-testid="product-add-to-cart"
          onClick={ onClick }
          name={ id }
        >
          Adicionar ao Carrinho
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
  onClick: PropTypes.func.isRequired,
};

export default ProductCard;
