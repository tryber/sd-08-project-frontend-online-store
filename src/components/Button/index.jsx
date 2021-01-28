import React from 'react';
import { TiShoppingCart } from 'react-icons/ti';
import { Link } from 'react-router-dom';

class Button extends React.Component {
  render() {
    return (
      <Link data-testid="shopping-cart-button" to="/shopping-cart">
        <TiShoppingCart size={ 30 } />
      </Link>
    );
  }
}

export default Button;
