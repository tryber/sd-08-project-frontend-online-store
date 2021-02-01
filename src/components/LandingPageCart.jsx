import React, { Component } from 'react';

class LandingPageCart extends Component {
  constructor(props) {
    super(props);
    const { location: { state: { cartProduct } } } = this.props;
    this.state = {
      empty: true,
      cartProduct,
    };
  }

  render() {
    const { cartProduct } = this.state;
    return (
      <section>
        <ul>
          <li data-testid="shopping-cart-empty-message">Seu carrinho está vazio{ console.log(cartProduct) }</li>
        </ul>
      </section>
    );
  }
}

export default LandingPageCart;
