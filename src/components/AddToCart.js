import React, { Component } from 'react';

class AddToCart extends Component {
  constructor() {
    super();

    this.state = {
      cart: [],

    };
    this.setLocalStorage = this.setLocalStorage.bind(this);
  }

  setLocalStorage() {
    const { prop } = this.props;
    const { id } = prop;
    if (localStorage.cart) {
      const test1 = JSON.parse(localStorage.getItem('cart'));
      test1.push(prop);
      const Productobject = JSON.stringify(test1);
      localStorage.setItem('cart', Productobject);
    } else {
      const test1 = [prop];
      const Productobject = JSON.stringify(test1);
      localStorage.setItem('cart', Productobject);
    }
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
