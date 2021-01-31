import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class DetalhesDoProduto extends Component {
  render() {
    const { location: { state: { product } } } = this.props;
    const { title, subtitle, price,
      condition, warranty, thumbnail } = product;
    return (
      <>
        <img src={ `${thumbnail}` } alt="product" />
        <p data-testid="product-detail-name">{title}</p>
        <p>{subtitle}</p>
        <p>{price}</p>
        <p>{condition}</p>
        <p>{warranty}</p>
      </>
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
};
