import React from 'react';
// import PropTypes from 'prop-types';

import {
  CheckoutForm,
  CheckoutProducts,
  PaymentMethodTypes,
  BtnGoHome,
} from '../components';
import { localStorageLoad, lsSaveCheckout } from '../localStorage';

class Checkout extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      client: {
        nameClient: '',
        cpfClient: '',
        emailClient: '',
        phoneClient: '',
        cepClient: '',
        addressClient: '',
        complementClient: '',
        numberAddressClient: '',
        cityClient: '',
        stateClient: '',
      },
    };
    this.setLocalStorageState = this.setLocalStorageState.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.setSaveCheckout = this.setSaveCheckout.bind(this);
  }

  componentDidMount() {
    this.setLocalStorageState();
  }

  componentDidUpdate() {
    this.setSaveCheckout();
  }

  handleChange({ target: { name, value } }) {
    const { client } = this.state;
    client[name] = value;
    this.setState({ client });
  }

  setSaveCheckout() {
    const { client } = this.state;
    lsSaveCheckout('checkout', client);
  }

  setLocalStorageState() {
    const results = localStorageLoad('shoppingCart');
    this.setState({ products: results });
  }

  render() {
    const { products, client } = this.state;
    return (
      <div>
        <header>
          <h1>Finalizar Compra</h1>
          <BtnGoHome />
        </header>
        <main>
          <CheckoutProducts products={ products } />
          <CheckoutForm client={ client } handleChange={ this.handleChange } />
          <PaymentMethodTypes />
        </main>
      </div>
    );
  }
}

export default Checkout;
