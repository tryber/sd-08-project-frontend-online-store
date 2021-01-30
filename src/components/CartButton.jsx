import React from 'react';
import { Link } from 'react-router-dom';

class CartButton extends React.Component {
  render() {
    return (
      <Link data-testid="shopping-cart-button" to="/pages/Cart">Cart</Link>
    );
  }
}

export default CartButton;
