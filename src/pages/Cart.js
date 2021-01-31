import React, { Component } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import EmptyCart from '../components/EmptyCart';
import Header from '../components/Header';
import './Cart.css';

class Cart extends Component {
  constructor(props) {
    super(props);
    let cartProducts = [];
    if ({}.hasOwnProperty.call(sessionStorage, 'products')) {
      cartProducts = JSON.parse(sessionStorage.getItem('products'));
    }

    this.state = {
      products: cartProducts,
    };
  }

  componentDidUpdate() {}

  render() {
    const { products } = this.state;
    return (
      <div>
        <Header />
        <div>
          <FaShoppingCart className="icon-cart" />
          <span className="header-cart">Carrinho de Compras</span>
          {products.length < 1 && <EmptyCart />}
          <section className="product-cart-container">
            {products.map((product) => (
              <div key={ product.title }>
                <span
                  className="product-cart-title"
                  data-testid="shopping-cart-product-name"
                >
                  {product.title}
                </span>
                <span
                  className="product-cart-quantity"
                  data-testid="shopping-cart-product-quantity"
                >
                  1
                </span>
              </div>
            ))}
          </section>
        </div>
      </div>
    );
  }
}

export default Cart;
