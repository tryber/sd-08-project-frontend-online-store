import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ShopButtonImage from './download.png';

class ShopButton extends Component {
  render() {
    return (
      <Link data-testid="shopping-cart-button" to="/shopping-cart">
        <img
          src={ ShopButtonImage }
          to="/shopping-cart"
          alt="Logo"
        />
      </Link>
    );
  }
}

export default ShopButton;
