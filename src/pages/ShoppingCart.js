import React from 'react';
import { Link } from 'react-router-dom';

class ShoppingCart extends React.Component {
  render() {
    return (
      <section>
        <header>
          <Link to="/">Back</Link>
          <h1>Carrinho de compras</h1>
        </header>
        <main>
          <p data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </p>
        </main>
      </section>
    );
  }
}

export default ShoppingCart;
