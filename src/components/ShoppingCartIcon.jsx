import React from 'react';
import shopCartImg from '../carrinho-de-compras.png';

class ShoppingCartIcon extends React.Component {
  render() {
    return (
      <a
        href="/shop-cart"
        data-testid="shopping-cart-button"
      >
        <img
          alt="carrinho de compras"
          className="shop-cart-image"
          src={ shopCartImg }
        />
      </a>
    );
  }
}

export default ShoppingCartIcon;
