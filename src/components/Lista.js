import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Lista extends Component {
  render() {
    return (
      <span><Link to="/carrinho-compras"><img src="https://st2.depositphotos.com/3665639/7442/v/600/depositphotos_74424541-stock-illustration-pictograph-of-shopping-cart.jpg" alt="carrinho de compras" data-testid="shopping-cart-button" /></Link></span>
    );
  }
}

export default Lista;
