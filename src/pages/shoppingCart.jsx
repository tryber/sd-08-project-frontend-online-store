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
                  { `Quantidade: ${amount}` }
                  <p>
                    { `Preço unitário: R$ ${price}` }
                  </p>
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
