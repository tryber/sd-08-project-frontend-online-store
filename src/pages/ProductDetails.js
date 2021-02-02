import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import addStorage from '../services/storage';
import cartPNG from '../cart.png';

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
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => addStorage(product) }
        >
          Adicionar ao carrinho
        </button>
        <Link
          to="/Cart"
          data-testid="shopping-cart-button"
        >
          <img src={ cartPNG } alt="this is the link to the shopping bag" width="32px" />
        </Link>

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
