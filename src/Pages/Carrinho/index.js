import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BotaoCarrinho from '../../Components/BotaoCarrinho';

export default class Carrinho extends Component {
  constructor(props) {
    super(props);
    const { product } = props.location.state;
    this.state = {
      product,
    };
  }

  render() {
    const { product } = this.state;

    const { title, price, thumbnail } = product;
    if (!product) {
      return (
        <>
          <BotaoCarrinho />
          <div data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </div>
        </>
      );
    }
    return (
      <>
        <BotaoCarrinho />
        <img src={ `${thumbnail}` } alt="product" />
        <p data-testid="shopping-cart-product-name">{title}</p>
        <p>{price}</p>
        <div data-testid="shopping-cart-product-quantity">1</div>
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
