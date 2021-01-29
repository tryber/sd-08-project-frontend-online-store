import React from 'react';
import { Link } from 'react-router-dom';

import Search from './Search';
import ButtonCategory from './ButtonCategory';

class Header extends React.Component {
  render() {
    return (
      <div>
        <Search />
        <Link data-testid="shopping-cart-button" to="/caritems">CARRINHO DE COMPRAS</Link>
        <ButtonCategory />
      </div>
    );
  }
}

export default Header;
