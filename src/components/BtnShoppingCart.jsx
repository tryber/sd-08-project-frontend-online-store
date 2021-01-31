import React from 'react';
import { Link } from 'react-router-dom';
import Img from '../img/pngwing.com.png';

class BtnShoppingCart extends React.Component {
  render() {
    return (
      <Link
        data-testid="shopping-cart-button"
        to="/shoppingcart"
      >
        <img src={ Img } alt="Carinho de Compras" />
      </Link>
    );
  }
}

export default BtnShoppingCart;
