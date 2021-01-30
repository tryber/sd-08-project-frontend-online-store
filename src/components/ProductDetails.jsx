import React from 'react';
import PropTypes from 'prop-types';

class ProductDetails extends React.Component {
  render() {
    const { location: { state: { product } } } = this.props;
    const { addCart } = this.props;
    const { title, thumbnail, price } = product;

    return (
      <div>
        <h1 data-testid="product-detail-name">{title}</h1>
        <img src={ thumbnail } alt="item" />
        <p>{price}</p>
        <button
          onClick={
            () => addCart(product)
          }
          type="button"
          data-testid="product-detail-add-to-cart"
        >
          Adicionar ao carrinho
        </button>

      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      product: PropTypes.shape({
        title: PropTypes.string.isRequired,
        thumbnail: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
  addCart: PropTypes.func.isRequired,
};

export default ProductDetails;
