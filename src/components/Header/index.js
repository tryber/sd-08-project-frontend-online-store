import React, { Component } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {
  render() {
    const { cart } = this.props;
    return (
      <header className="header-container">
        <div className="header-logo">LogoMarca</div>
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
