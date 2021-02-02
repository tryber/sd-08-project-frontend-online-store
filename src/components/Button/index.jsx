import React from 'react';
import PropTypes from 'prop-types';
import { TiShoppingCart } from 'react-icons/ti';
import { Link } from 'react-router-dom';

class Button extends React.Component {
  createCartCount(itemCount) {
    return (
      <span className="cartCount" data-testid="shopping-cart-size">{itemCount}</span>
    );
  }

  render() {
    const { shoppingCart } = this.props;
    const keys = Object.keys(shoppingCart);
    const itemCount = !keys.length ? 0 : keys.reduce(
      (acc, key) => acc + shoppingCart[key].amountInCart, 0,
    );

    return (
      <Link
        data-testid="shopping-cart-button"
        to="/shopping-cart"
        className="shoppingCart"
      >
        {itemCount ? this.createCartCount(itemCount) : ''}
        <TiShoppingCart size={ 30 } />
      </Link>
    );
  }
}

Button.propTypes = {
  shoppingCart: PropTypes.shape({}).isRequired,
};

export default Button;
