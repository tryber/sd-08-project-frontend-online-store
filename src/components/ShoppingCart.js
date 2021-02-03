import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = {
      redirect: false,
    };
    this.redirecionaCheckout = this.redirecionaCheckout.bind(this);
  }

  getProduct(element) {
    const copy = { ...element };
    delete copy.qty;
    return copy;
  }

  itemProduto(cart) {
    const { addToCart, removeFromCart, removeAllFromCart } = this.props;
    return cart.map((element) => (
      <div
        key={ element.id }
      >
        <p
          data-testid="shopping-cart-product-name"
        >
          {element.title}
        </p>
        <img src={ element.thumbnail } alt="imagem" />
        <p data-testid="shopping-cart-product-quantity">{ element.qty }</p>
        <button
          type="button"
          onClick={ () => addToCart(this.getProduct(element)) }
          data-testid="product-increase-quantity"
        >
          +
        </button>
        <button
          type="button"
          data-testid="product-decrease-quantity"
          onClick={ () => removeFromCart(this.getProduct(element)) }
        >
          -
        </button>
        <button
          type="button"
          onClick={ () => removeAllFromCart(this.getProduct(element)) }
        >
          ×
        </button>
      </div>));
  }

  cartReduce(cart) {
    const notFound = -1;
    return cart.reduce((acc, curr) => {
      const sameProduct = acc.findIndex((prod) => prod.id === curr.id);
      if (sameProduct === notFound) return [...acc, Object.assign(curr, { qty: 1 })];
      acc[sameProduct].qty += 1;
      return acc;
    },
    []);
  }

  redirecionaCheckout() {
    this.setState({
      redirect: '/checkout',
    });
  }

  render() {
    const { cart } = this.props;
    const { redirect } = this.state;

    if (cart.length === 0) {
      return (
        <p data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </p>
      );
    }
    if (redirect) { return <Redirect to={ redirect } />; }
    return (
      <div>
        { this.itemProduto(this.cartReduce(cart)) }
        <button
          type="button"
          data-testid="checkout-products"
          onClick={ this.redirecionaCheckout }
        >
          Finalizar Compra
        </button>
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  removeAllFromCart: PropTypes.func.isRequired,
};

export default ShoppingCart;
