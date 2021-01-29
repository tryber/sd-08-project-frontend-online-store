import React, { Component } from 'react';
import Proptypes from 'prop-types';

class ProductCard extends Component {
  render() {
    const { product: { title, price, thumbnail } } = this.props;
    return (
      <div data-testid="product">
        <h3>{title}</h3>
        <img src={ thumbnail } alt={ title } />
        <p>{price}</p>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: Proptypes.shape({
    title: Proptypes.string.isRequired,
    price: Proptypes.number.isRequired,
    thumbnail: Proptypes.string.isRequired,
  }).isRequired,
};
export default ProductCard;
