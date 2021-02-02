import React from 'react';
import PropTypes from 'prop-types';

class ShoppingCart extends React.Component {
  itemProduto(cart) {
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
      </div>
    );
  }
}
ShoppingCart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default ShoppingCart;
