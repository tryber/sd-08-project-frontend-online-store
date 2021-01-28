import React from 'react';
import { Link } from 'react-router-dom';

class CartIcon extends React.Component {
  render() {
    return (
      <div>
        <Link to="/shoppingCart" data-testid="shopping-cart-button">
          <i className="fas fa-shopping-cart" />
        </Link>
      </div>
    );
  }
}

export default CartIcon;
