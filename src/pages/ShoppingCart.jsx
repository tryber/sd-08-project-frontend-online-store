import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as localStorage from '../services/localStorage';

export default class ShoppingCart extends Component {
  constructor() {
    super();
    this.productsList = this.productsList.bind(this);
    this.updateState = this.updateState.bind(this);
    this.addSubButton = this.addSubButton.bind(this);
    this.totalPrice = this.totalPrice.bind(this);

    this.state = {
      cart: localStorage.readCart(),
      totalPrice: 0,
    };
  }

  componentDidMount() {
    this.updateState();
    this.totalPrice();
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

  removeItem(productId) {
    let { cart } = this.state;
    cart = cart.filter(({ id }) => id !== productId);
    this.setState({ cart },
      () => {
        localStorage.saveCart(cart);
        this.totalPrice();
      });
  }

  totalPrice() {
    const { cart } = this.state;
    const zero = 0;
    if (cart) {
      const total = cart
        .reduce((previous, { price, amount }) => previous + price * amount, zero);
      this.setState({ totalPrice: total });
    }
  }

  async addSubButton(productId, operation) {
    const minAmount = 0;
    const { cart } = this.state;
    const index = cart.findIndex(({ id }) => id === productId);

    if (operation === 'add') {
      cart[index].amount += 1;
    } else if (operation === 'sub' && cart[index].amount > minAmount) {
      cart[index].amount -= 1;
    }
    if (cart[index].amount <= minAmount) {
      this.removeItem(cart[index].id);
    } else {
      this.setState({ cart }, () => {
        localStorage.saveCart(cart);
        this.totalPrice();
      });
    }
  }

  productsList() {
    const { cart, totalPrice } = this.state;
    const two = 2;
    return (
      <div>
        { cart.map(({ amount, totalAmount, thumbnail, title, id, price }) => (
          <div key={ id }>
            <button
              onClick={ () => this.removeItem(id) }
              type="button"
            >
              X
            </button>
            <img src={ thumbnail } alt={ title } />
            <p
              data-testid="shopping-cart-product-name"
            >
              { title }
            </p>
            <button
              onClick={ ({ target }) => this.addSubButton(id, target.name) }
              name="sub"
              data-testid="product-decrease-quantity"
              type="button"
            >
              -
            </button>
            <p data-testid="shopping-cart-product-quantity">
              { amount }
            </p>
            <button
              onClick={ ({ target }) => this.addSubButton(id, target.name) }
              name="add"
              data-testid="product-increase-quantity"
              type="button"
              disabled={ amount === totalAmount }
            >
              +
            </button>
            <p>{ price }</p>
          </div>
        ))}
        <p>
          {`Valor Total da Compra R$:${totalPrice.toFixed(two)}`}
        </p>
        <Link to="/checkout" data-testid="checkout-products"> Finalizar compra </Link>
      </div>
    );
  }

  render() {
    const { cart } = this.state;
    const zero = 0;
    let cartItemsLength;
    if (cart) {
      cartItemsLength = cart.length;
    } else cartItemsLength = zero;

    if (cartItemsLength) {
      return (
        <div>
          <Link to="/">Voltar</Link>
          {this.productsList()}
        </div>
      );
    }
    return (
      <div>
        <Link to="/">Voltar</Link>
        {this.emptyMessage()}
      </div>

    );
  }
}