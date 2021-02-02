import React, { Component } from 'react';
import { addAnotherProduct, removeAnotherProduct } from '../services/storage';

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      products: JSON.parse(localStorage.getItem('cart')),
    };
    this.handleAddAnotherProduct = this.handleAddAnotherProduct.bind(this);
    this.handleRemoveAnotherProduct = this.handleRemoveAnotherProduct.bind(this);
  }

  handleAddAnotherProduct({ target }) {
    const { name } = target;
    addAnotherProduct(name);
    const storage = JSON.parse(localStorage.getItem('cart'));
    this.setState({ products: storage });
  }

  handleRemoveAnotherProduct({ target }) {
    const { name } = target;
    removeAnotherProduct(name);
    const storage = JSON.parse(localStorage.getItem('cart'));
    this.setState({ products: storage });
  }

  renderListShoppingCart(products) {
    if (localStorage.getItem('cart')) {
      return products.map(({ title, count }) => (
        <div key={ title }>
          <div data-testid="shopping-cart-product-name">
            Title:
            {title}
          </div>
          <div data-testid="shopping-cart-product-quantity">
            Quantity:
            {count}
            <input
              name={ title }
              type="button"
              value="+"
              data-testid="product-increase-quantity"
              onClick={ this.handleAddAnotherProduct }
            />
            <input
              name={ title }
              type="button"
              value="-"
              data-testid="product-decrease-quantity"
              onClick={ this.handleRemoveAnotherProduct }
            />
          </div>
        </div>
      ));
    }
    return (
      <div data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </div>
    );
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        {this.renderListShoppingCart(products)}
      </div>
    );
  }
}

export default Cart;
