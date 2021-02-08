import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ShoppingCart extends React.Component {
  render() {
    const { cart } = this.props;

    if (cart.length === 0) {
      return (
        <main>
          <header>
            <Link to="/">Back</Link>
            <h1>Carrinho de compras</h1>
          </header>

          <p data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio.
          </p>
        </main>
      );
    }

    return (
      <main>
        <header>
          <Link to="/">Back</Link>

          <h1>Carrinho de compras</h1>
        </header>

        {cart.map((item) => (
          <section key={ item.id }>
            <p data-testid="shopping-cart-product-name">
              {item.title}
            </p>

            <img src={ item.thumbnail } alt="Thumbnail" />

            <p data-testid="shopping-cart-product-quantity">1</p>
          </section>
        ))}
      </main>
    );
  }
}

ShoppingCart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ShoppingCart;
