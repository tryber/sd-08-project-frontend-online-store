import React from 'react';
import PropTypes from 'prop-types';

class ShoppingCart extends React.Component {
  getProduct(element) {
    const copy = { ...element };
    delete copy.qty;
    return copy;
  }

  itemProduto(cart) {
    const { addToCart, removeFromCart, removeAllFromCart, isAvailable } = this.props;
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
          disabled={ !isAvailable(this.getProduct(element)) }
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

  render() {
    const { cart } = this.props;

    if (cart.length === 0) {
      return (
        <p data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </p>
      );
    }
    return (
      <div>
        { this.itemProduto(this.cartReduce(cart)) }
        <button type="button">Finalizar Compra</button>
      </div>
    );
  }
}
ShoppingCart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  removeAllFromCart: PropTypes.func.isRequired,
  isAvailable: PropTypes.func.isRequired,
};

export default ShoppingCart;
