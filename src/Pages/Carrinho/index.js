import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Carrinho extends Component {
  render() {
    const products = JSON.parse(localStorage.getItem('PRODUTOS'));
    if (!products) {
      return (
        <div data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </div>
      );
    }
    return (
      <>
        {products.map((product) => {
          const { title, thumbnail, price, quantity } = product;
          return (
            <>
              <img src={ `${thumbnail}` } alt="product" />
              <p data-testid="shopping-cart-product-name">{title}</p>
              <p>{price}</p>
              <div data-testid="shopping-cart-product-quantity">{quantity}</div>
            </>
          );
        })}
      </>
    );
  }
}

Carrinho.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      product: PropTypes.shape({
        title: PropTypes.string,
        subtitle: PropTypes.string,
        price: PropTypes.number,
        thumbnail: PropTypes.string,
      }),
    }),
  }).isRequired,
};
