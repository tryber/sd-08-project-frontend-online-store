import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import HomeButton from './BackToHome';
import NavForm from './NavForm';
import './NavBar.css';

class NavBar extends React.Component {
  render() {
    const { totalItemsInCart } = this.props;
    return (
      <header className="header">
        <HomeButton />
        <nav className="nav">
          <NavForm { ...this.props } />
        </nav>
        <div>
          <Link to="/carrinho" data-testid="shopping-cart-button">
            <img
              alt="carrinho"
              src="https://seeklogo.com/images/C/Carrinho_de_Compras-logo-F251151A71-seeklogo.com.png"
            />
          </Link>
          <div data-testid="shopping-cart-size" className="cart-counter">
            { totalItemsInCart }
          </div>
        </div>
      </header>
    );
  }
}

NavBar.propTypes = {
  totalItemsInCart: PropTypes.number,
};

NavBar.defaultProps = {
  totalItemsInCart: undefined,
};
export default NavBar;
