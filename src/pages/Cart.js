import React from 'react';

class Cart extends React.Component {
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

  loadingItems() {
    const items = JSON.parse(localStorage.getItem('cart'));
    const countedItems = this.countProducts(items);
    const productsNames = Object.keys(countedItems);
    const productsQuantity = Object.values(countedItems);
    const arr = [];
    for (let i = 0; i < productsNames.length; i += i) {
      arr[i] = [productsNames[i], productsQuantity[i]];
    }
    this.setState({ products: arr, loading: false });
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
            {products[1]}
          </div>
        </div>
      ));
    }
    return (
      <div>
        <span
          data-testid="shopping-cart-empty-message"
        >
          Seu carrinho está vazio
        </span>
      </div>
    );
  }

  render() {
    const { loading, products } = this.state;
    return (
      <div>
        {loading ? 'Carregando Items...' : this.loadingList(products)}
      </div>
    );
  }
}

export default Cart;
