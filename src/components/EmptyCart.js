import React from 'react';
import { FaBoxOpen } from 'react-icons/fa';

const EmptyCart = () => (
  <div className="cart-container">
    <FaBoxOpen className="empty-box" />
    <p data-testid="shopping-cart-empty-message" className="message-cart">
      Seu carrinho está vazio
    </p>
  </div>
);
export default EmptyCart;
