import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import '../styles/headerStyle.css';
import Logo from '../images/Cat.png';

class Header extends Component {
  render() {
    return (
      <header>
        <img className="logo" src={ Logo } alt=""/>
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
