import React, { Component } from 'react';
import { FaBoxOpen } from 'react-icons/fa';
import './Cart.css';

class Cart extends Component {
  render() {
    return (
      <div>
        <FaBoxOpen className="empty-box" />
        <p data-testid="shopping-cart-empty-message" className="message-cart">
          Seu carrinho está vazio
        </p>
      </div>
    );
  }
}

export default Cart;
