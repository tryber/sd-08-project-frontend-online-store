import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaShoppingCart } from 'react-icons/fa';
import './ButtonCart.css';

class ButtonCart extends Component {
  render() {
    const { itensOnCart } = this.props;
    return (
      <Link className="link-cart" data-testid="shopping-cart-button" to="/cart">
        <FaShoppingCart className="cart-button" />
        <span className="itens_on_cart" data-testid="shopping-cart-size">
          {itensOnCart}
        </span>
      </Link>
    );
  }
}
ButtonCart.propTypes = {
  itensOnCart: PropTypes.number.isRequired,
};
export default ButtonCart;
