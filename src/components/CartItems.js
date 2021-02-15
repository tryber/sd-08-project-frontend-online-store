import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import CartItem from './CartItem';

class CartItems extends Component {
  render() {
    const { items, handleChange } = this.props;

    return (
      <section>
        <div className="cart-items">
          { items.map((item) => (
            <CartItem
              key={ item.id }
              item={ item }
              handleChange={ handleChange }
            />
          )) }
        </div>
        <Link to="/pages/checkout">
          <button
            data-testid="checkout-products"
            type="button"
          >
            Finalizar Compra
          </button>
        </Link>
      </section>
    );
  }
}

CartItems.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default CartItems;
