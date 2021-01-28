import React from 'react';
import { Link } from 'react-router-dom';

class CartIcon extends React.Component {
  render() {
    return (
      <Link to="/shoppingCart" data-testid="shopping-cart-button">
        <i className="fas fa-shopping-cart" />
      </Link>
    );
  }
}

export default CartIcon;
