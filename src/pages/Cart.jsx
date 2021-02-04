import React from 'react';
import { recoverCart } from '../services/cart';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: recoverCart(),
    };
  }

  render() {
    const { cartItems } = this.state;
    console.log(cartItems);
    return (
      <div>
        {cartItems
          ? (cartItems.map(({ id, name, amount }) => (
            <div className="cartItem" key={ id }>
              <p data-testid="shopping-cart-product-name">{ name }</p>
              <p data-testid="shopping-cart-product-quantity">{ amount }</p>
            </div>
          )))
          : (
            <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
          )}
      </div>
    );
  }
}

export default Cart;
