import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class ProductCard extends React.Component {
  render() {
    const { card: { title, thumbnail, price, id } } = this.props;
    return (
      <section data-testid="product" className="product-card">
        <Link to={ `/details/${id}` } data-testid="product-detail-link">
          <p>{title}</p>
          <img src={ thumbnail } alt={ title } />
          <p>{`R$${price.toFixed(2)}`}</p>
        </Link>
        <button
          type="button"
          data-testid="product-add-to-cart"
          className="button-buy"
        >
          Comprar
        </button>
      </section>
    );
  }
}

ProductCard.propTypes = {
  card: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
