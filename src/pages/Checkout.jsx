import React from 'react';
// import PropTypes from 'prop-types';
import {
  CheckoutForm,
  CheckoutProducts,
  PaymentMethodTypes,
  BtnGoHome,
} from '../components';
import { localStorageLoad } from '../localStorage';

class Checkout extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
    this.setLocalStorageState = this.setLocalStorageState.bind(this);
  }

  componentDidMount() {
    this.setLocalStorageState();
  }

  setLocalStorageState() {
    const results = localStorageLoad('shoppingCart');
    this.setState({ products: results });
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        <header>
          <h1>Finalizar Compra</h1>
          <BtnGoHome />
        </header>
        <main>
          <CheckoutProducts products={ products } />
          <CheckoutForm />
          <PaymentMethodTypes />
        </main>
      </div>
    );
  }
}

export default Checkout;
