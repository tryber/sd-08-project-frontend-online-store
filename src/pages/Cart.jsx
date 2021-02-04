import React from 'react';
import CartItem from '../components/CartItem';
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
      cartItems.length === 0
        ? (
          <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>)
        : (cartItems.map(({ id, name, amount }) => (

          <CartItem key={ id } productInfos={ { name, amount } } />

          // <div className="cartItem" key={ id }>
          //   <p data-testid="shopping-cart-product-name">{ name }</p>
          //   <p data-testid="shopping-cart-product-quantity">{ amount }</p>
          // </div>
        )))
    );
  }
}

export default Cart;
