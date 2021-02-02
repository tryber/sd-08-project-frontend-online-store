import React from 'react';
import { Link } from 'react-router-dom';

class ShoppingCart extends React.Component {
  constructor() {
    super();

    this.renderProducts = this.renderProducts.bind(this);
    this.getKeys = this.getKeys.bind(this);
    this.addProduct = this.addProduct.bind(this);
    this.lessProduct = this.lessProduct.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
    this.sumProducts = this.sumProducts.bind(this);
  }

  componentDidMount() {
    this.getKeys();
  }

  getKeys() {
    const keysLS = Object.keys(localStorage);
    keysLS.map((id) => this.setState({
      [id]: [1, localStorage.getItem(id)],
    }));
  }

  addProduct({ target }) {
    const { id } = target;
    this.setState((anterior) => ({
      [id]: [anterior[id][0] + 1, anterior[id][1]],
    }));
  }

  lessProduct({ target }) {
    const { id } = target;
    this.setState((anterior) => {
      if (anterior[id][0] > 1) {
        return ({
          [id]: [anterior[id][0] - 1, anterior[id][1]],
        });
      }
    });
  }

  deleteProduct({ target }) {
    const { id } = target;
    const stateLocal = this.state;

    delete stateLocal[id];

    this.setState(stateLocal);
    localStorage.removeItem(id);
  }

  sumProducts() {
    const stateLocal = Object.values(this.state);
    let sum = 0;
    stateLocal.map((element) => {
      sum += element[0] * JSON.parse(element[1]).price;
      return sum;
    });
    return sum;
  }

  renderProducts() {
    const productsLocalStorage = Object.values(localStorage);
    const stateLocal = this.state;
    console.log(stateLocal);
    const products = productsLocalStorage.map((element) => JSON.parse(element));
    if (stateLocal !== null) {
      return (
        <div>
          { products.map((element) => {
            const { id, thumbnail, title, price } = element;
            return (
              <div key={ id }>
                <button type="button" id={ id } onClick={ this.deleteProduct }>X</button>
                <img src={ thumbnail } alt="Product" />
                <span data-testid="shopping-cart-product-name">{ title }</span>
                <button
                  data-testid="product-decrease-quantity"
                  type="button"
                  id={ id }
                  onClick={ this.lessProduct }
                >
                  -
                </button>
                <span
                  data-testid="shopping-cart-product-quantity"
                >
                  { stateLocal[id][0] }
                </span>
                <button
                  data-testid="product-increase-quantity"
                  type="button"
                  id={ id }
                  onClick={ this.addProduct }
                >
                  +
                </button>
                <span>{ price }</span>
              </div>
            );
          })}
          <div>
            { 'Valor Total: R$ ' }
            <span>{ this.sumProducts() }</span>
          </div>
        </div>
      );
    }
  }

  render() {
    if (localStorage.length === 0) {
      return (
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      );
    }
    if (localStorage.length > 0) {
      return (
        <div>
          Shopping Cart
          { this.renderProducts() }
          <Link
            data-testid="checkout-products"
            to={ { pathname: '/checkout', state: this.state } }
          >
            Finalizar compra
          </Link>
        </div>
      );
    }
  }
}

export default ShoppingCart;
