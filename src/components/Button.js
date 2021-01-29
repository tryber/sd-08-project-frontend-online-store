import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Button extends Component {
  render() {
    return (
      <Link to="/pages/ShoppingCart" data-testid="shopping-cart-button">
        <img src="https://static.vecteezy.com/ti/vetor-gratis/p1/628934-icone-carrinho-de-compras-gr%C3%A1tis-vetor.jpg" alt="vetor carrinho" width="80px" />
      </Link>
    );
  }
}

export default Button;
