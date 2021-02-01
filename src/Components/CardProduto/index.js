import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


export default class CardProduto extends Component {
  render() {
    const { product } = this.props;
    const { title, thumbnail, price, id } = product;

    return (
      <div data-testid="product">
        <h4>{title}</h4>
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
              product,
            },
          } }
        >
          <button type="button" data-testid="product-add-to-cart">Add to card</button>
        </Link>
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
};
