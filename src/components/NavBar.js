import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import HomeButton from './BackToHome';
import NavForm from './NavForm';
import './NavBar.css';

class NavBar extends React.Component {
  render() {
    const { cartProducts } = this.props;
    return (
      <>
        <header className="header">
          <HomeButton />
          <nav className="nav">
            <NavForm { ...this.props } />
          </nav>
          cartProducts
          <Link to="/carrinho" data-testid="shopping-cart-button">
            <div>
              <img
                alt="carrinho"
                src="https://seeklogo.com/images/C/Carrinho_de_Compras-logo-F251151A71-seeklogo.com.png"
              />
              <span>{ console.log(cartProducts) }</span>
            </div>
          </Link>
        </header>
        <button
          type="button"
          className="filter-options"
          onClick={ this.mobileShowFilterOptions }
        >
          teste
        </button>
      </>

    );
  }
}

NavBar.propTypes = {
  cartProducts: PropTypes.func.isRequired,
};

export default NavBar;
