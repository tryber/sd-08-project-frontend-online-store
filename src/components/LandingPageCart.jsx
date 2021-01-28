import React, { Component } from 'react';

class LandingPageCart extends Component {
  render() {
    return (
      <section>
        <ul>
          <li data-testid="shopping-cart-empty-message">Seu carrinho está vazio</li>
        </ul>
      </section>
    );
  }
}

export default LandingPageCart;
