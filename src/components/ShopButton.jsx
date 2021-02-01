import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ShopButtonImage from './download.png';

class ShopButton extends Component {
  render() {
    const { cartProduct } = this.props;
    return (
      <Link data-testid="shopping-cart-button" to={ { pathname: '/shopping-cart/', state: cartProduct } }>
        <img
          src={ ShopButtonImage }
          alt="Logo"
        />
      </Link>
    );
  }
}

export default ShopButton;
