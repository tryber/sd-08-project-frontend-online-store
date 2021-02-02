import React, { Component } from 'react';

class AddToCart extends Component {
  constructor() {
    super();

    this.state = {
      cart: [],

    };
    this.setLocalStorage = this.setLocalStorage.bind(this);
  }

  addCartClick() {
    const { item } = this.state;
    this.setState((prev) => ({
      cart: [...prev.cart, item],
    }));
  }

  render() {
    return (

      <div>
        <button
          type="button"
          onClick={ this.setLocalStorage }
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

export default AddToCart;
