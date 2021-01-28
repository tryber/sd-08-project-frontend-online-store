import React, { Component } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {
  render() {
    // const { cart } = this.props;
    return (
      <header className="header-container">
        <Link to="/" className="header-logo">LogoMarca</Link>
        <Link
          to="/cart"
          className="header-cart"
          data-testid="shopping-cart-button"
        >
          <FaShoppingCart />
        </Link>
      </header>
    );
  }
}

export default Header;
