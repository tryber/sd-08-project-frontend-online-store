import React, { Component } from 'react';
import ReturnButoon from '../components/ReturnButton';
import Button from '../components/Button';

let quantity = {};
class PageShoppingCart extends Component {
  constructor() {
    super();

    this.state = {

    };
    this.getItems = this.getItems.bind(this);
    this.createState = this.createState.bind(this);
    this.soma = this.soma.bind(this);
  }

  componentDidMount() {
    this.createState();
  }

  getKeys() {
    const keysList = [];
    for (let index = 0; index < localStorage.length; index += 1) {
      const key = localStorage.key(index);
      if (key.includes('Product')) {
        keysList.push(key);
      }
    }
    return keysList;
  }

  getItems(key) {
    const productObj = JSON.parse(localStorage.getItem(key));
    quantity = { ...quantity, [productObj.id]: 1 };

    return (
      <div key={ productObj.id }>
        <img src={ productObj.thumbnail } alt={ productObj.title } />
        <h3 data-testid="shopping-cart-product-name">{ productObj.title }</h3>
        <p>{ productObj.price }</p>
        <button type="button">-</button>
        <p>
          Qtd:
          <span
            data-testid="shopping-cart-product-quantity"
            id={ productObj.id }
          >
            { this.state[productObj.id] }
          </span>
        </p>
        <button type="button" name={ productObj.id } onClick={ this.soma }>+</button>
        <button type="button">x</button>
      </div>
    );
  }

  createState() {
    this.setState({
      ...quantity,
    });
  }

  soma({ target }) {
    // console.log(document.getElementById(`${target.name}`).innerHTML);
    this.setState((state) => ({
      [target.name]: state[target.name] + 1,
    }));
  }

  render() {
    const keysList = this.getKeys();
    return (
      <>
        <ReturnButoon />
        <Button />
        { keysList.length === 0
          ? <span data-testid="shopping-cart-empty-message">Seu carrinho está vazio</span>
          : keysList.map((key) => this.getItems(key)) }
      </>
    );
  }
}

export default PageShoppingCart;
