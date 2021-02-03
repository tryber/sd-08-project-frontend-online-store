import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProdutosCarrinho from '../../Components/ProdutosCarrinho';
import BotaoComprar from '../../Components/BotaoComprar';

export default class Carrinho extends Component {
  render() {
    const { cartProducts } = this.props;
    const products = JSON.parse(localStorage.getItem('PRODUTOS'));
    if (products.length === 0) {
      return (
        <div data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </div>
      );
    }
    return (
      <>
        <ProdutosCarrinho cartProducts={ cartProducts } />
        <BotaoComprar />
      </>
    );
  }
}

Carrinho.propTypes = {
  // location: PropTypes.shape({
  //   state: PropTypes.shape({
  //     product: PropTypes.shape({
  //       title: PropTypes.string,
  //       subtitle: PropTypes.string,
  //       price: PropTypes.number,
  //       thumbnail: PropTypes.string,
  //     }),
  //   }),
  // }).isRequired,
  cartProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
};
