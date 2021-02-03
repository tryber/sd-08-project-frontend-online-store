import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { updateStorageQuantity } from '../services/storageFuncs';

class CartItem extends Component {
  constructor(props) {
    super(props);

    const { item: { title: name } } = props;
    const { quantity } = JSON.parse(localStorage.cartItems)
      .find(({ title }) => title === name);

    const { item: { available_quantity: availableQuantity } } = props;

    this.state = {
      quantity,
      availableQuantity,
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
    updateStorageQuantity(title, quantity);
    handleChange();
  }

  render() {
    const { item: { title, thumbnail, price } } = this.props;
    const { quantity, availableQuantity } = this.state;
    const addButton = quantity < availableQuantity;
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
            onClick={ addButton ? this.add : undefined }
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

CartItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    available_quantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default CartItem;
