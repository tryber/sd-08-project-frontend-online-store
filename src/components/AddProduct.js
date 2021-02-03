import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { updateStorageItem } from '../services/storageFuncs';
import CartSizeContext from '../services/context';

class AddProduct extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { item } = this.props;
    const updateCartSize = this.context;
    if (localStorage.cartItems) {
      updateStorageItem(item);
    } else {
      const quantifiedItem = { ...item, quantity: 1 };
      localStorage.cartItems = JSON.stringify([quantifiedItem]);
    }
    updateCartSize();
  }

  render() {
    const { testid } = this.props;
    return (
      <button
        type="button"
        onClick={ this.onClick }
        data-testid={ testid }
      >
        Adicionar ao carrinho!
      </button>
    );
  }
}

AddProduct.contextType = CartSizeContext;

AddProduct.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    shipping: PropTypes.shape({
      free_shipping: PropTypes.bool,
    }).isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  testid: PropTypes.string.isRequired,
};

export default AddProduct;
