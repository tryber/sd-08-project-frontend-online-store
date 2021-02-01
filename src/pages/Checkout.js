import React from 'react';
import Header from '../components/Header';
import CloseSale from '../components/CloseSale';
import Cart from './Cart';

class Checkout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Cart />
        <CloseSale />
      </div>
    );
  }
}

export default Checkout;
