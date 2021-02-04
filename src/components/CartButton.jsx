import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class CartButton extends React.Component {
  render() {
    // console.log(this.props);
    const { cartItems } = this.props;
    return (
      <div>
        <Link
          data-testid="shopping-cart-button"
          to={ { pathname: '/pages/cart', cartItems } }
        >
          Cart
        </Link>
        <div data-testid="shopping-cart-size">
          {`(${cartItems.length})`}
        </div>
      </div>
    );
  }
}

CartButton.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.shape({})),
}.isRequired;

export default CartButton;
