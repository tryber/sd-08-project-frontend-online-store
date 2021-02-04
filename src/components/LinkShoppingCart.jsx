import React from 'react';
import { Link } from 'react-router-dom';

function LinkToShoppingCart() {
  return (
    <Link to="/ShoppingCart" data-testid="shopping-cart-button">Shopping Cart</Link>
  );
}

export default LinkToShoppingCart;
