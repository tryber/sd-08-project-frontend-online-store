import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProductDetails extends Component {
  render() {
    const { location: { product } } = this.props;
    const { title, thumbnail, price } = product;
    return (
      <div>
        <Link to="/">
          <button type="button">
            Home
          </button>
        </Link>

        <img src={ thumbnail } alt={ title } />
        <h2 data-testid="product-detail-name">{title}</h2>
        <h3>{price}</h3>

      </div>

    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    product: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      quantity: PropTypes.number,
      price: PropTypes.number.isRequired,
      thumbnail: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default ProductDetails;
