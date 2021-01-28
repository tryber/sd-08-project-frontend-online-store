import React, { Component } from 'react';
import ShoppingCartList from '../components/ShoppingCartList';

class ShoppingCart extends Component {
  render() {
    return (
      <>
        <p>Shopping Cart</p>
        <ShoppingCartList />
      </>
    );
  }
}

export default ShoppingCart;
