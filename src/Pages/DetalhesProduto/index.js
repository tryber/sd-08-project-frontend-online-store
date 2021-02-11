import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BotaoAdiciona from '../../Components/BotaoAdiciona';
import BotaoCarrinho from '../../Components/BotaoCarrinho';

import FormularioAvaliaçao from '../../Components/FormularioAvaliaçao';
import FreteGratis from '../../Components/FreteGratis';

export default class DetalhesDoProduto extends Component {
  render() {
    const { location: { state: { product } } } = this.props;
    const { title, subtitle, price,
      condition, warranty, thumbnail } = product;
    const { addProductToCart, cartSize } = this.props;

    return (
      <div className="productDetails">
        <img src={ `${thumbnail}` } alt="product" className="imgProduct" />
        <p data-testid="product-detail-name">{title}</p>
        <FreteGratis product={ product } />
        <p>{subtitle}</p>
        <p>R$ {price}</p>
        <p>Condição: {condition}</p>
        <p>{ warranty }</p>
        <BotaoAdiciona
          product={ product }
          addProductToCart={ addProductToCart }
          testId="product-detail-add-to-cart"
        />
        <BotaoCarrinho cartSize={ cartSize } />
        <FormularioAvaliaçao />
      </div>
    );
  }
}

DetalhesDoProduto.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      product: PropTypes.shape({
        title: PropTypes.string,
        subtitle: PropTypes.string,
        price: PropTypes.number,
        condition: PropTypes.string,
        warranty: PropTypes.string,
        thumbnail: PropTypes.string,
      }),
    }),
  }).isRequired,
  addProductToCart: PropTypes.func.isRequired,
  cartSize: PropTypes.number.isRequired,

};
