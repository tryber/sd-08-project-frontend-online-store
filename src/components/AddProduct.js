import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { updateStorageItem } from '../services/storageFuncs';

class AddProduct extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { item } = this.props;
    if (localStorage.cartItems) {
      updateStorageItem(item);
    } else {
      const quantifiedItem = { ...item, quantity: 1 };
      localStorage.cartItems = JSON.stringify([quantifiedItem]);
    }
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
