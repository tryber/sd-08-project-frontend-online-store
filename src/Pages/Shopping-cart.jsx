import React from 'react';

class ShoppingCart extends React.Component {
  constructor() {
    super();

    this.renderProducts = this.renderProducts.bind(this);
    this.getKeys = this.getKeys.bind(this);
    this.addProduct = this.addProduct.bind(this);
    this.lessProduct = this.lessProduct.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
  }

  componentDidMount() {
    this.getKeys();
  }

  getKeys() {
    const keysLS = Object.keys(localStorage);
    keysLS.map((element) => this.setState({ [element]: 1 }));
  }

  addProduct({ target }) {
    const { id } = target;
    this.setState((anterior) => ({
      [id]: anterior[id] + 1,
    }));
  }

  lessProduct({ target }) {
    const { id } = target;
    this.setState((anterior) => {
      if (anterior[id] > 1) {
        return ({
          [id]: anterior[id] - 1,
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

  renderProducts() {
    const productsLocalStorage = Object.values(localStorage);
    const products = productsLocalStorage.map((element) => JSON.parse(element));
    const stateLocal = this.state;
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
                  { stateLocal[id] }
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
        </div>
      );
    }
  }
}

export default ShoppingCart;
