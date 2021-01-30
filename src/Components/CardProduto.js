import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class CardProduto extends React.Component {
  render() {
    const { produto } = this.props;
    const { title, thumbnail, price, id } = produto;
    return (
      <div data-testid="product">
        <h4>{ title }</h4>
        <img src={ thumbnail } alt="" />
        <span>{ `Preço: ${price}` }</span>
        <Link
          data-testid="product-detail-link"
          to={ {
            pathname: `/details/${id}`,
            state: {
              produto,
            },
          } }
        >
          VER DETALHES

        </Link>
      </div>

    );
  }
}

CardProduto.propTypes = {
  produto: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
  }).isRequired,
};
