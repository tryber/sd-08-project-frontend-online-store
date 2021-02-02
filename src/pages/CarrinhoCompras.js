import React, { Component } from 'react';

class CarrinhoCompras extends Component {
  constructor(props) {
    super(props);
    this.restoreState = this.restoreState.bind(this);
    this.increaseItem = this.increaseItem.bind(this);
    this.decreaseItem = this.decreaseItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    this.restoreState();
  }

  async restoreState() {
    const products = await JSON.parse(localStorage.getItem('itemsCart'));
    if (products) {
      this.setState({ products });
    }
  }

  removeItem(item) {
    const { products } = this.state;
    const newProducts = products.filter((element) => element.id !== item.id);
    localStorage.setItem('itemsCart', JSON.stringify(newProducts));
    this.setState({ products: newProducts });
  }

  increaseItem(item) {
    const { products } = this.state;
    const newProduct = products.map((element) => {
      if (element.id === item.id) {
        element.qtd += 1;
      }
      return element;
    });
    localStorage.setItem('itemsCart', JSON.stringify(newProduct));
    this.setState({ products: newProduct });
  }

  decreaseItem(item) {
    const { products } = this.state;
    const quantity = products.find((element) => element.id === item.id);
    const flagZero = 1;
    if (quantity.qtd > flagZero) {
      const newProduct = products.map((element) => {
        if (element.id === item.id) {
          element.qtd -= 1;
        }
        return element;
      });
      localStorage.setItem('itemsCart', JSON.stringify(newProduct));
      this.setState({ products: newProduct });
    }
  }

  total() {
    const { products } = this.state;
    const totalPrice = products.reduce((acc, item) => acc + (item.price * item.qtd), 0);
    return (
      <p>{totalPrice}</p>
    );
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        {(products.length !== 0) ? products.map((item) => (
          <div key={ item.title }>
            <button
              type="submit"
              onClick={ () => this.removeItem(item) }
            >
              X
            </button>
            <p data-testid="shopping-cart-product-name">{ item.title }</p>
            <p>{ item.price }</p>
            <p data-testid="shopping-cart-product-quantity">{ item.qtd }</p>
            <button
              type="submit"
              data-testid="product-increase-quantity"
              onClick={ () => this.increaseItem(item) }
            >
              +
            </button>
            <button
              type="submit"
              data-testid="product-decrease-quantity"
              onClick={ () => this.decreaseItem(item) }
            >
              -
            </button>
          </div>
        )) : <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>}
        {
          (products.length !== 0) ? this.total() : ''
        }
      </div>
    );
  }
}
export default CarrinhoCompras;
