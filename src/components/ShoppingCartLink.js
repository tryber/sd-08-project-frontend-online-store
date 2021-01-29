import React from 'react';
import { Link } from 'react-router-dom';

class ShoppingCartLink extends React.Component {
  render() {
    return (
      <div>
        <Link
          to="/shopping-cart"
          data-testid="shopping-cart-button"
        >
          CARRINHO
        </Link>
      </div>
    );
  }
}

export default ShoppingCartLink;
