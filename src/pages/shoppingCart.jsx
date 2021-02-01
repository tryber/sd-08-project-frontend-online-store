import React, { Component } from 'react';
import Header from '../components/Header';
import '../styles/shoppingCartStyle.css';
import * as localStorage from '../services/localStorage';

class ShoppingCart extends Component {
  constructor() {
    super();
    this.productsList = this.productsList.bind(this);
    this.updateState = this.updateState.bind(this);

    this.state = {
      cart: [],
    };
  }

  componentDidMount() {
    this.updateState();
  }

  updateState() {
    const cart = localStorage.readCart();
    this.setState({ cart });
  }

  emptyMessage() {
    return (
      <p data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio.
      </p>
    );
  }

  productsList() {
    const { cart } = this.state;
    return (
      <div className="cart-products">
        { cart.map(({ amount, title, id }) => (
          <div className="product" key={ id }>
            <p
              className="product-title"
              data-testid="shopping-cart-product-name"
            >
              { title }
            </p>
            <p
              className="product-qtd"
              data-testid="shopping-cart-product-quantity"
            >
              { amount }
            </p>
          </div>
        ))}
      </div>
    );
  }

  render() {
    const { cart } = this.state;
    let cartItemsLength;
    if (cart) {
      cartItemsLength = cart.length;
    } else cartItemsLength = 0;

    if (cartItemsLength) {
      return (this.productsList());
    }

    return (
      <div>
        <Header />
        { this.emptyMessage() }
      </div>
    );
  }
}

export default ShoppingCart;
