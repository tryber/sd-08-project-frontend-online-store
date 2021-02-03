import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as localStorage from '../services/localStorage';
import ShoppingCart from '../shopping-cart.png';

class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      cartSize: localStorage.showQuantInCart(),
    };
  }

  componentDidUpdate() {
    this.setState({
      cartSize: localStorage.showQuantInCart(),
    });
  }

  render() {
    const { location: { state } } = this.props;
    const { cartSize } = this.state;
    return (
      <div>
        <Link data-testid="shopping-cart-button" to="/shoppingcart">
          <img
            className="shopping-cart-icon"
            src={ ShoppingCart }
            alt="icon shopping cart"
          />
          <span
            className="cart-quantity"
            data-testid="shopping-cart-size"
          >
            {cartSize}
          </span>
        </Link>
        <div data-testid="product-detail-name">
          <p>{ state.title }</p>
          <img src={ state.thumbnail } alt={ state.title } />
          <p>{ state.price }</p>
        </div>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => localStorage.addToCart(state) }
        >
          Add to Cart
        </button>
      </div>

    );
  }
}

ProductDetail.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      product: PropTypes.shape({
        title: PropTypes.string,
        thumbnail: PropTypes.string,
        price: PropTypes.number,
      }),
      products: PropTypes.arrayOf(PropTypes.object),
    }),
  }).isRequired,
};

export default ProductDetail;
