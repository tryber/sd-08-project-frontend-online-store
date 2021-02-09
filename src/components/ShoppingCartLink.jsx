import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '../images/shopping-cart-icon-png.png';
import './css/ShoppingCartLink.css';

class ShoppingCartLink extends React.Component {
  render() {
    return (
      <div>
        <Link
          to={ {
            pathname: '/shopping-cart/',
          } }
          data-testid="shopping-cart-button"
        >
          <img src={ ShoppingCartIcon } alt="Carrinho" />
        </Link>
      </div>
    );
  }
}

export default ShoppingCartLink;
