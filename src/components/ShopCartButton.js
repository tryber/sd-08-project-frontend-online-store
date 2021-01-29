import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ShopCartButton extends Component {
    render() {
      return (
        <Link to="/pages/ShoppingCart" data-testid="shopping-cart-button">
          <img src="https://image.flaticon.com/icons/png/512/30/30893.png" alt="menpushingcart" width="80px" />
          </Link>
    );
  }
}

export default ShopCartButton;