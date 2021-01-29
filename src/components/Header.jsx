import React from 'react';
import { Link } from 'react-router-dom';

import Search from './Search';

class Header extends React.Component {
  render() {
    return (
      <div>
        <Search />
        <Link data-testid="shopping-cart-button" to="/caritems">CARRINHO DE COMPRAS</Link>
      </div>
    );
  }
}

export default Header;
