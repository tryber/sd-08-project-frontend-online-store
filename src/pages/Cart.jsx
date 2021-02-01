import React from 'react';
import PropTypes from 'prop-types';
import CartItem from '../components/CartItem';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      searchField: '',
      productsList: [],
      categories: [],
      radioValue: '',
      cartItems: [],
    };
    this.setLocalStorageState = this.setLocalStorageState.bind(this);
    this.getLocalStorage = this.getLocalStorage.bind(this);
  }

  componentDidMount() {
    this.getLocalStorage();
  }

  componentWillUnmount() {
    this.setLocalStorageState();
  }

  getLocalStorage() {
    const myState = JSON.parse(localStorage.getItem('myState'));
    this.setState(myState);
  }

  setLocalStorageState() {
    const myState = JSON.stringify(this.state);
    // console.log(myState);
    localStorage.setItem('myState', myState);
  }

  render() {
    console.log(this.props);
    // const { location: { cartItems } } = this.props;
    const { cartItems } = this.state;
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
