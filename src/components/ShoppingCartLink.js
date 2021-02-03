import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './css/shoppingCartLink.css';

class ShoppingCartLink extends React.Component {
  render() {
    const { lengthOfCart } = this.props;
    return (
      <div>
        <Link
          to={ {
            pathname: '/shopping-cart/',
          } }
          data-testid="shopping-cart-button"
          className="cart-link"
        >
          <img src="/shopping-cart.svg" alt="Cart Link" className="cart-svg" />
          <span className="product-counter" data-testid="shopping-cart-size">
            { lengthOfCart }
          </span>
        </Link>
      </div>
    );
  }
}

ShoppingCartLink.propTypes = {
  lengthOfCart: PropTypes.number.isRequired,
};
export default ShoppingCartLink;
