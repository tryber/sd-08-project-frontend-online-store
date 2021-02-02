import React, { Component } from 'react';

class Cart extends Component {
  constructor() {
    super();
    this.loadingItems = this.loadingItems.bind(this);
    this.state = {
      products: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.loadingItems();
  }

  countProducts(products) {
    const counts = {};
    for (let i = 0; i < products.length; i += 1) {
      const objKey = products[i].title;
      counts[objKey] = counts[objKey] ? counts[objKey] + 1 : 1;
    }
    return counts;
  }

  loadingList(products) {
    if (localStorage.getItem('cart')) {
      return products.map((product) => (
        <div key={ product[0] }>
          <div data-testid="shopping-cart-product-name">
            Title:
            {product[0]}
          </div>
          <div data-testid="shopping-cart-product-quantity">
            Quantity:
            {product[1]}
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

  loadingItems() {
    const items = JSON.parse(localStorage.getItem('cart'));
    if (items !== null) {
      const result = this.countProducts(items);
      const productsNames = Object.keys(result);
      const productsQuantity = Object.values(result);
      const arr = [];
      for (let i = 0; i < productsNames.length; i += 1) {
        arr[i] = [productsNames[i], productsQuantity[i]];
      }
      this.setState({ products: arr, loading: false });
    }
  }

  render() {
    const { loading, products } = this.state;
    return (
      <div>
        {loading ? 'CarregandoItems...' : this.loadingList(products)}
      </div>
    );
  }
}

export default Cart;
