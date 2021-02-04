import React from 'react';
import PropTypes from 'prop-types';
import AdressCheckout from '../components/AddressCheckout';
import CartItem from '../components/CartItem';
import PersonCheckout from '../components/PersonCheckout';

class CheckOut extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    const { location: { cartItems } } = this.props;
    console.log(this.props);
    return (
      <div>
        <ul>
          {
            cartItems.length > 0
              ? <CartItem cartItems={ cartItems } />
              : <p>Carrinho está vazio</p>
          }
        </ul>
        <PersonCheckout />
        <AdressCheckout />
      </div>
    );
  }
}

CheckOut.propTypes = {
  location: PropTypes.shape({}),
}.isRequired;

export default CheckOut;
