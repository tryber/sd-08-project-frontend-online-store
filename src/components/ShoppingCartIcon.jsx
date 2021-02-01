import React from 'react';
import { Link } from 'react-router-dom';
import shopCartImg from '../carrinho-de-compras.png';

class ShoppingCartIcon extends React.Component {
  render() {
    return (
      <Link
        to="/shop-cart"
        data-testid="shopping-cart-button"
      >
        <img
          alt="carrinho de compras"
          src={ shopCartImg }
        />
      </Link>
    );
  }
}

export default ShoppingCartIcon;
