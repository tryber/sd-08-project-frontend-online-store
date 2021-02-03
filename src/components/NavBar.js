import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import HomeButton from './BackToHome';
import NavForm from './NavForm';
import './NavBar.css';

class NavBar extends React.Component {
  cart() {
    const { totalItemsInCart } = this.props;
    return (
      <Link to="/carrinho" data-testid="shopping-cart-button">
        <span data-testid="shopping-cart-size" className="d-flex flex-nowrap ml-2">
          <div className="color-white">{ totalItemsInCart }</div>
          <i className="fas fa-shopping-cart fa-2x color-white" />
        </span>
      </Link>
    );
  }

  render() {
    return (

      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark"
        // className="navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar"
        aria-label="Eighth navbar example"
      >
        <div className="container d-flex flex-nowrap">
          <HomeButton />
          <NavForm { ...this.props } />
          {this.cart()}
        </div>
      </nav>
    );
  }
}

// class NavBar2 extends React.Component {
//   render() {
//     const { totalItemsInCart } = this.props;
//     return (
//       <header className="header">
//         <HomeButton />
//         <nav className="nav">
//           <NavForm { ...this.props } />
//         </nav>
//         <div>
//           <Link to="/carrinho" data-testid="shopping-cart-button">
//             <img
//               alt="carrinho"
//               src="https://seeklogo.com/images/C/Carrinho_de_Compras-logo-F251151A71-seeklogo.com.png"
//             />
//           </Link>
//           <div data-testid="shopping-cart-size" className="cart-counter">
//             { totalItemsInCart }
//           </div>
//         </div>
//       </header>
//     );
//   }
// }

NavBar.propTypes = {
  totalItemsInCart: PropTypes.number,
};

NavBar.defaultProps = {
  totalItemsInCart: undefined,
};
export default NavBar;
