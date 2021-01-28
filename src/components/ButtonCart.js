import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import './ButtonCart.css';

class ButtonCart extends Component {
  render() {
    return (
      <Link data-testid="shopping-cart-button" to="/cart">
        <FaShoppingCart className="cart-button" />
      </Link>
    );
  }
}

export default ButtonCart;
