import React from 'react';
import { Link } from 'react-router-dom';
import CartProduct from './CartProduct';

class ShoppingCart extends React.Component {
  constructor() {
    super();

    const cart = JSON.parse(localStorage.getItem('cart'));
    this.state = {
      cart,
    };
  }

  render() {
    console.log();
    const test = localStorage.length;
    const { cart } = this.state;
    if (test === 0) {
      return (
        <section>
          <Link to="/">Voltar</Link>
          <p data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </p>
        </section>
      );
    }
    return (
      <section>
        <div>
          <Link to="/">Voltar</Link>
        </div>
        {cart.map((cartelement) => (<CartProduct
          Key={ `${cartelement.id}` }
          prop={ cartelement }
        />))}
      </section>);
  }
}
export default ShoppingCart;
