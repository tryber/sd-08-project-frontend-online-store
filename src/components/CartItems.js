import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CartItem from './CartItem';

class CartItems extends Component {
  render() {
    const { items, handleChange } = this.props;

    return (
      <div className="cart-items">
        { items.map((item) => (
          <CartItem
            key={ item.id }
            item={ item }
            handleChange={ handleChange }
          />
        )) }
      </div>
    );
  }
}

CartItems.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default CartItems;
