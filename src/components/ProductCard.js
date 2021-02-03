import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductCard extends Component {
renderFreeShipping = () => {
  const { product: { shipping: {
    free_shipping: freeShipping } } } = this.props;
  if (freeShipping) {
    return <p data-testid={"free-shipping"}>Frete Grátis</p>;
  }
}

render() {
  const { product: {
    title, price, thumbnail } } = this.props;
  return (
    <div data-testid="product">
      <h3>{title}</h3>
      <img src={ thumbnail } alt={ title } />
      <p>{price}</p>
      {this.renderFreeShipping()}
    </div>
  );
}
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    shipping: PropTypes.shape({
      free_shipping: PropTypes.bool.isRequired,
    }).isRequired,
  }).isRequired,
};
export default ProductCard;
