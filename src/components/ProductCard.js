import React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { product, addToCart } = this.props;
    const { title, price, thumbnail } = product;
    return (
      <div data-testid="product">
        <h1>{title}</h1>
        <img src={ thumbnail } alt={ title } />
        <p>{price}</p>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ () => addToCart(product) }
        >
          Adicionar
        </button>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ProductCard;
