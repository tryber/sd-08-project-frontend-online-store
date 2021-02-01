import React, { Component } from 'react';

class CarrinhoCompras extends Component {
  constructor(props) {
    super(props);
    this.restoreState = this.restoreState.bind(this);
    this.increaseItem = this.increaseItem.bind(this);
    this.decreaseItem = this.decreaseItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.state = {
      products: undefined,
    };
  }

  componentDidMount() {
    this.restoreState();
  }

  async restoreState() {
    const itemsCart = await JSON.parse(localStorage.getItem('itemsCart'));
    if (itemsCart) {
      this.setState({ products: itemsCart });
    }
  }

  removeItem(item) {
    console.log(item);
  }

  increaseItem(item) {
    console.log(item);
  }

  decreaseItem(item) {
    console.log(item);
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        {products ? products.map((item) => (
          <div key={ item.title }>
            <button
              type="submit"
              onClick={ () => this.removeItem(item) }
            >
              X
            </button>
            <p data-testid="shopping-cart-product-name">{ item.title }</p>
            <p>{ item.price }</p>
            <button
              type="submit"
              data-testid="product-decrease-quantity"
              onClick={ () => this.decreaseItem(item) }
            >
              -
            </button>
            <p data-testid="shopping-cart-product-quantity">{ item.qtd }</p>
            <button
              type="submit"
              data-testid="product-increase-quantity"
              onClick={ () => this.increaseItem(item) }
            >
              +
            </button>
          </div>
        )) : <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>}
      </div>
    );
  }
}
export default CarrinhoCompras;
