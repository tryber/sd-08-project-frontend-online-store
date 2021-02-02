import React from 'react';
import { Link } from 'react-router-dom';

class CartPage extends React.Component {
  render() {
    return (
      <section>
        <Link to="/">Home</Link>
        <h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>
      </section>
    );
  }
}

export default CartPage;
