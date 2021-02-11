import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import HomeButton from './BackToHome';
import NavForm from './NavForm';
import './NavBar.css';
import MobileFilterMenu from './MobileFilterMenu';

class NavBar extends React.Component {
  constructor() {
    super();

    this.state = {
      showMobileMenu: false,
    };

    this.showMenu = this.showMenu.bind(this);
  }

  cart() {
    const { totalItemsInCart } = this.props;
    return (
      <Link to="/carrinho" data-testid="shopping-cart-button">
        <div data-testid="shopping-cart-size" className="d-flex flex-nowrap ml-2">
          <div className="color-white">{ totalItemsInCart }</div>
          <i className="fas fa-shopping-cart fa-2x color-white" />
        </div>
      </Link>
    );
  }

  showMenu() {
    this.setState({ showMobileMenu: true });
  }

  render() {
    const { width } = this.props;
    const { showMobileMenu } = this.state;
    const smallWidth = 500;
    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark mb-2"
      >
        {showMobileMenu && <MobileFilterMenu />}
        <div className="container d-flex flex-nowrap">
          <button className="navbar-toggler" type="button" onClick={ this.showMenu }>
            <span className="navbar-toggler-icon" />
          </button>
          <HomeButton />
          {width > smallWidth && <NavForm { ...this.props } />}
          {this.cart()}
        </div>
      </nav>
    );
  }
}

NavBar.propTypes = {
  totalItemsInCart: PropTypes.number,
  width: PropTypes.number,
};

NavBar.defaultProps = {
  totalItemsInCart: undefined,
  width: 900,
};
export default NavBar;
