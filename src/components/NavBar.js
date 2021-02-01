import React from 'react';
import { Link } from 'react-router-dom';
import HomeButton from './BackToHome';
import NavForm from './NavForm';
import './NavBar.css';

class NavBar extends React.Component {
  render() {
    return (
      <header className="header">
        <HomeButton />
        <nav className="nav">
          <NavForm { ...this.props } />
        </nav>
        <Link to="/carrinho" data-testid="shopping-cart-button"><img alt="carrinho" src="https://seeklogo.com/images/C/Carrinho_de_Compras-logo-F251151A71-seeklogo.com.png" width="50" height="50" /></Link>
      </header>

    );
  }
}

// NavBar.propTypes = {
//   handleChange: PropTypes.func.isRequired,
//   handleClick: PropTypes.func.isRequired,
// };

export default NavBar;
