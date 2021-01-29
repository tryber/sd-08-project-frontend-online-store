import React from 'react';
import { Link } from 'react-router-dom';

import Search from './Search';
import ButtonCategory from './ButtonCategory';

class Header extends React.Component {
  render() {
    const { onQueryProduct, value, onClickRequest } = this.props;
    return (
      <div>
        <Search
          onQueryProduct={ onQueryProduct }
          nameProduct={ value }
          onClickRequest={ onClickRequest }
        />
        <Link data-testid="shopping-cart-button" to="/caritems">CARRINHO DE COMPRAS</Link>
        <ButtonCategory
          onClickRequest={ onClickRequest }
        />
      </div>
    );
  }
}

export default Header;
