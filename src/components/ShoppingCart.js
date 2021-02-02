import React from 'react';
import CartProduct from './CartProduct';

class ShoppingCart extends React.Component {
  constructor() {
    super();

    const cart = JSON.parse(localStorage.getItem('cart'));
    this.state = {
      cart,
    };

    this.setState(localStorage.getItem(cart));
  }

  render() {
    console.log();
    const test = localStorage.length;
    const { cart } = this.state;
    if (test === 0) {
      return (
        <p data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </p>);
    }
    return (
      <p>
        {cart.map((cartelement) => (<CartProduct
          Key={ `${cartelement.id}` }
          prop={ cartelement }
        />))}
      </p>);
  }
}
export default ShoppingCart;
