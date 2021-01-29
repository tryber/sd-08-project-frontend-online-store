import React, { Component } from 'react';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';
import '../styles/headerStyle.css';

class Header extends Component {
  render() {
    return (
      <header>
        <SearchBar />
        <Link
          data-testid="shopping-cart-button"
          to="/ShoppingCart"
        >
          <img
            className="cart-icon"
            src="https://image.flaticon.com/icons/png/512/2404/2404120.png"
            alt="Imagem do carrinho"
          />
        </Link>
      </header>
    );
  }
}

export default Header;
