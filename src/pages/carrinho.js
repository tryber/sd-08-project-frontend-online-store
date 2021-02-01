import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Carrinho extends Component {
  render() {
    const { cartProducts } = this.props;
    if (cartProducts.length < 1) {
      return <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>;
    }
    return (
      <div className="right-content">
        {cartProducts.map((product) => (
          <div key={ product.name }>
            <p data-testid="shopping-cart-product-name">{ product.name }</p>
            <span data-testid="shopping-cart-product-quantity">{product.quantity}</span>
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
};

export default Carrinho;
