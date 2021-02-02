import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import '../styles/shoppingCartStyle.css';
import * as localStorage from '../services/localStorage';

class ShoppingCart extends Component {
  constructor() {
    super();
    this.productsList = this.productsList.bind(this);
    this.updateState = this.updateState.bind(this);
    this.addSubButton = this.addSubButton.bind(this);

    this.state = {
      cart: localStorage.readCart(),
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

  addSubButton(productId, operationName) {
    const { cart } = this.state;
    const index = cart.findIndex(({ id }) => id === productId);
    if (operationName === 'add') cart[index].amount += 1;
    if (operationName === 'sub' && cart[index].amount > 0) cart[index].amount -= 1;
    this.setState({ cart }, () => localStorage.saveCart(cart));
  }

  productsList() {
    const { cart } = this.state;
    return (
      <div>
        <Header />
        <main className="cart-container">
          {cart.map(({ price, amount, title, id, thumbnail }) => (
            <div className="product" key={ id } data-testid="shopping-cart-product-name">
              <img className="cart-product-img" src={ thumbnail } alt={ title } />
              <div className="product-info">
                <Link to={ `/${id}` }>
                  <h1>{ title }</h1>
                </Link>
                <h2 className="product-qtd" data-testid="shopping-cart-product-quantity">
                  <div className="add-and-decrease">
                    <p>
                      { `Preço unitário: R$ ${price}` }
                    </p>
                    <button
                      type="button"
                      data-testid="product-decrease-quantity"
                      onClick={ (e) => this.addSubButton(id, e.target.name) }
                      name="sub"
                    >
                      -
                    </button>
                    { amount }
                    <button
                      type="button"
                      data-testid="product-increase-quantity"
                      onClick={ (e) => this.addSubButton(id, e.target.name) }
                      name="add"
                    >
                      +
                    </button>
                  </div>
                  <p>
                    { `Total: R$ ${price * amount}` }
                  </p>
                </h2>
              </div>
            </div>
          ))}
        </main>
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
        { this.emptyMessage()}
      </div>
    );
  }
}

export default ShoppingCart;
