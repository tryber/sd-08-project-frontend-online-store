import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductCard extends Component {
  render() {
    const { product: { title, thumbnail, price } } = this.props;
    return (
      <section data-testid="product">
        <h2>{ title }</h2>
        <img src={ thumbnail } alt="imgThumbnail" />
        <span>{ price }</span>
      </section>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default ProductCard;
