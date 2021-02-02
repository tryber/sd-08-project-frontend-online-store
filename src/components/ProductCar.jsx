import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import ShoppingCart from '../shopping-cart.png';

class ProductCar extends Component {
  render() {
    const { cartSize, productsCar } = this.props;
    return (
      <div>
        <Link
          data-testid="shopping-cart-button"
          to={ {
            pathname: '/shoppingcart',
            state: productsCar } }
        >
          <img
            className="shopping-cart-icon"
            src={ ShoppingCart }
            alt="icon shopping cart"
          />
          <span
            className="cart-quantity"
            data-testid="shopping-cart-size"
          >
            { cartSize }
          </span>
        </Link>
      </div>
    );
  }
}

ProductCar.propTypes = {
  cartSize: propTypes.number.isRequired,
  productsCar: propTypes.arrayOf(propTypes.object).isRequired,
};

export default ProductCar;
