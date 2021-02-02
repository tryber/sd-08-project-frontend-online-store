import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CartedProduct from '../components/CartedProduct';

class ShoppingCart extends Component {

  localStorageQuantity () {
    if(localStorage.products === undefined) {
      return "";
    }
    if(!localStorage.quantity) {
      const productsInfo = JSON.parse(localStorage.products);
      const ids = productsInfo.map((product) => ({ [product.id]: { quantity: 1, price: product.price } }));
      localStorage.setItem('quantity', JSON.stringify(ids));
      // console.log(ids[0].MLB1697005686.quantity);
    } else {
      const quantity = JSON.parse(localStorage.quantity);
      const productsInfo = JSON.parse(localStorage.products);
      const initialIndex = productsInfo.length - (productsInfo.length - quantity.length);
      // console.log(initialIndex);
      if(quantity.length !== productsInfo.length) {
        const arrayNewProducts = [];

        productsInfo.forEach((product, index) => { 
          if(index >= initialIndex) {
            const objProduct = {
              [product.id]: { quantity: 1, price: product.price },
            }
            arrayNewProducts.push(objProduct);
          }
        })
        localStorage.setItem('quantity', JSON.stringify([...quantity, ...arrayNewProducts]));

      }
    }
        // localStorage.setItem('quantity', JSON.stringify(ids));
        // console.log("acesso");
  }

  componentDidMount () {
    this.localStorageQuantity();
  }
  render() {
    if (localStorage.length === 0) {
      return (
        <div>
          <span data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </span>
        </div>
      );
    }
    const productsInCart = JSON.parse(localStorage.products);
    return (
      <div>
        <Link to="/">HOME</Link>
        <p>
          Quantidade de itens no carrinho:
          { productsInCart.length }
        </p>
        <ul>
          {productsInCart.map((product, index) => (
            <CartedProduct key={ index } product={ product } />))}
        </ul>
        <Link to="/Checkout" data-testid="checkout-products">
          <button type="button">Finalizar Compra</button>
        </Link>
      </div>
    );
  }
}

export default ShoppingCart;
