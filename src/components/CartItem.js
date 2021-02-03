import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { updateStorageQuantity } from '../services/storageFuncs';
import CartSizeContext from '../services/context';

class CartItem extends Component {
  constructor(props) {
    super(props);

    const { item: { title: name } } = props;
    const { quantity } = JSON.parse(localStorage.cartItems)
      .find(({ title }) => title === name);

    this.state = {
      quantity,
    };

    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
    this.updateAll = this.updateAll.bind(this);
  }

  add() {
    this.setState(({ quantity }) => ({
      quantity: quantity + 1,
    }), this.updateAll);
  }

  subtract() {
    this.setState(({ quantity }) => ({
      quantity: quantity - 1,
    }), this.updateAll);
  }

  updateAll() {
    const { item: { title }, handleChange } = this.props;
    const { quantity } = this.state;
    const updateCartSize = this.context;
    updateStorageQuantity(title, quantity);
    handleChange();
    updateCartSize();
  }

  render() {
    const { item: { title, thumbnail, price } } = this.props;
    const { quantity } = this.state;
    return (
      <section>
        <img src={ thumbnail } alt={ title } />
        <section className="cart-item-name-container">
          <p data-testid="shopping-cart-product-name">{ title }</p>
        </section>
        <section>
          <button
            type="button"
            onClick={ this.subtract }
            data-testid="product-decrease-quantity"
          >
            -
          </button>
          <div data-testid="shopping-cart-product-quantity">{ quantity }</div>
          <button
            type="button"
            onClick={ this.add }
            data-testid="product-increase-quantity"
          >
            +
          </button>
        </section>
        <p>{ `R$ ${(price * quantity).toFixed(2)}` }</p>
      </section>
    );
  }
}

CartItem.contextType = CartSizeContext;

CartItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default CartItem;
