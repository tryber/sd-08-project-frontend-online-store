import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Carrinho extends Component {
  render() {
    const { cartProducts, changeCarQuantityProduct, deleteCartProduct } = this.props;
    if (cartProducts.length < 1) {
      return <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>;
    }
    return (
      <div className="right-content">
        {cartProducts.map((product) => (
          <div key={ product.id }>
            <p data-testid="shopping-cart-product-name">{ product.title }</p>
            <button
              type="button"
              name="subtract"
              data-testid="product-decrease-quantity"
              id={ product.id }
              onClick={ changeCarQuantityProduct }
            >
              -
            </button>
            <span data-testid="shopping-cart-product-quantity">
              {product.quantity}
            </span>
            <button
              type="button"
              name="add"
              data-testid="product-increase-quantity"
              id={ product.id }
              onClick={ changeCarQuantityProduct }
            >
              +
            </button>
            <button type="button" onClick={ () => deleteCartProduct(product) }>X</button>
            <Link
              data-testid="checkout-products"
              to={ {
                pathname: '/checkout',

              } }
            >
              Finalizar a Compra
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

Carrinho.propTypes = {
  cartProducts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      quantity: PropTypes.number,
    }),
  ).isRequired,
  changeCarQuantityProduct: PropTypes.func.isRequired,
  deleteCartProduct: PropTypes.func.isRequired,
};

export default Carrinho;
