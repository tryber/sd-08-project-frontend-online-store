import React from 'react';
import { Link } from 'react-router-dom';
import CartImage from '../images/cart.png';

class CartButton extends React.Component {
  render() {
    return (
      <div>
        <Link
          to="/Cart"
          data-testid="shopping-cart-button"
        >
          <img src={ CartImage } height="40px" alt="" />
        </Link>
      </div>
    );
  }
}

export default CartButton;
