import React from 'react';
import PropTypes from 'prop-types';
import CartItem from '../components/CartItem';

class Cart extends React.Component {
  render() {
    console.log(this.props);
    const { location: { state: { cartItems } } } = this.props;
    return (
      <div>
        {
          cartItems.length > 0
            ? <CartItem cartItems={ cartItems } />
            : <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
        }
      </div>
    );
  }
}

Cart.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      cartItems: PropTypes.shape({}),
    }),
  }),
}.isReuired;

export default Cart;
