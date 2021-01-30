import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartImg from '../shopping-cart.png';
import '../App.css';

export default function InputSearch() {
  return (
    <div>
      <Link data-testid="shopping-cart-button" to="/shoppingcart">
        <img
          className="shopping-cart-icon"
          src={ ShoppingCartImg }
          alt="icon shopping cart"
        />
      </Link>
    </div>
  );
}
