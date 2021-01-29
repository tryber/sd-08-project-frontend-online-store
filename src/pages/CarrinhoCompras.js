import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CarrinhoCompras extends Component {
  constructor(props) {
    super(props);
    this.restoreState = this.restoreState.bind(this);
    this.increaseItem = this.increaseItem.bind(this);
    this.decreaseItem = this.decreaseItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.state = {
      productsTeste: [],
    };
  }

  componentDidMount() {
    this.restoreState();
  }

  async restoreState() {
    this.setState({ productsTeste: products });
  }

  removeItem(item) {
    const { productsTeste } = this.state;
    const itemsIndex = items.findIndex((element) => element.id === item.id);
    const flag = -1;
    if (itemsIndex !== flag) {
      delete items[itemsIndex];
    }
    productsTeste.find((element) => element.id === item.id);
    this.setState({ productsTeste });
  }

  increaseItem(item) {
    const { productsTeste } = this.state;
    const itemsIndex = items.findIndex((element) => element.id === item.id);
    const flag = -1;
    if (itemsIndex !== flag) {
      items[itemsIndex].qtd += 1;
    }
    productsTeste.find((element) => element.id === item.id).qtd += 1;
    this.setState({ productsTeste });
  }

  decreaseItem(item) {
    const { productsTeste } = this.state;
    const itemsIndex = items.findIndex((element) => element.id === item.id);
    const flag = -1;
    const flagZero = 0;
    if (items[itemsIndex].qtd > flagZero) {
      if (itemsIndex !== flag) {
        items[itemsIndex].qtd -= 1;
      }
      productsTeste.find((element) => element.id === item.id).qtd -= 1;
      this.setState({ productsTeste });
    }
  }

  render() {
    const { productsTeste } = this.state;
    return (
      <div>
        {productsTeste ? productsTeste.map((item) => (
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
        <Link
          to={
            { pathname: '/checkout',
              state: { products: productsTeste } }
          }
          data-testid="checkout-products"
        >
          Fechar Carrinho
        </Link>
      </div>
    );
  }
}
export default CarrinhoCompras;
