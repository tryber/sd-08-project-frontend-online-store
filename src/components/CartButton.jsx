import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class CartButton extends React.Component {
  render() {
    console.log(this.props);
    const { cartItems } = this.props;
    return (
      <Link
        data-testid="shopping-cart-button"
        to={ { pathname: '/pages/cart', state: { cartItems } } }
      >
        Cart
      </Link>
    );
  }
}

CartButton.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.shape({})),
}.isRequired;

export default CartButton;
