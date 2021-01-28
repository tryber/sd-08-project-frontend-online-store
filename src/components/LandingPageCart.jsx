import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LandingPageCart extends Component {
  render() {
    return (
      <section>
        <Link to="/shopping-cart" />
        <ul>
          <li data-testid="shopping-cart-empty-message">Seu carrinho está vazio</li>
        </ul>
      </section>
    );
  }
}

export default LandingPageCart;
