import React from 'react';
import { Link } from 'react-router-dom';
import ProductsCart from '../components/ProductsCart';

class ShoppingCart extends React.Component {
  render() {
    const productsCart = JSON.parse(localStorage.getItem('productsCart'));
    const emptyCart = (
      <h1
        data-testid="shopping-cart-empty-message"
      >
        Seu carrinho está vazio
      </h1>);
    if (!productsCart) return emptyCart;
    return (
      <div>
        <h1>Carrinho</h1>
        {productsCart.map((product) => (
          <ProductsCart key={ product.id } product={ product } />))}
        <div>
          <Link
            to="/checkout"
            data-testid="checkout-products"
          >
            <button type="button">
              Finalizar Compra
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default ShoppingCart;
