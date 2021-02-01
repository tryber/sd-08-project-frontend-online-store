import React from 'react';
import { Link } from 'react-router-dom';

class CartButton extends React.Component {
  render() {
    return (
      <div>
        <Link
          to="/Cart"
          data-testid="shopping-cart-button"
        >
          CARRINHO
        </Link>
        <h4>Seu carrinho está vazio</h4>
      </div>
    );
  }
}

export default CartButton;
