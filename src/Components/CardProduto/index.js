import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import BotaoAdiciona from '../BotaoAdiciona';
import FreteGratis from '../FreteGratis';

export default class CardProduto extends Component {
  render() {
    const { product, addProductToCart } = this.props;
    const { title, thumbnail, price, id } = product;
    return (
      <div data-testid="product" className="product">
        <h4>{title}</h4>
        <FreteGratis product={ product } />
        <img src={ thumbnail } alt="" />
        <span>{`Preço: ${price}`}</span>
        <Link
          data-testid="product-detail-link"
          to={ {
            pathname: `/details/${id}`,
            state: {
              product,
            },
          } }
        >
          VER DETALHES
        </Link>
        <Link
          data-testid="product-detail-link"
          to={ {
            pathname: `/cart/${id}`,
            state: {
              product, count: 1,
            },
          } }
        />
        <BotaoAdiciona
          product={ product }
          addProductToCart={ addProductToCart }
          testId="product-add-to-cart"
        />
      </div>
    );
  }
}

CardProduto.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
  }).isRequired,
  addProductToCart: PropTypes.func.isRequired,
};
