import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Carrinho extends Component {
  render() {
    const { cartProducts, addCarQuantityProduct } = this.props;
    if (cartProducts.length < 1) {
      return <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>;
    }
    return (
      <div className="right-content">
        {cartProducts.map((product) => (
          <div key={ product.name }>
            {console.log(product)}
            <p data-testid="shopping-cart-product-name">{ product.name }</p>
            {/* <button type="button" onClick={ subCarQuantityProduct }>-</button> */}
            <span data-testid="shopping-cart-product-quantity">{product.quantity}</span>
            <button
              type="button"
              name={ product.name }
              onClick={ addCarQuantityProduct }
            >
              +
            </button>
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
  addCarQuantityProduct: PropTypes.func.isRequired,
  // subCarQuantityProduct: PropTypes.func.isRequired,
};

export default Carrinho;
