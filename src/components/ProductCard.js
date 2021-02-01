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
          <div><img src={ thumbnail } alt={ title } /></div>
          <p>{`R$${price}`}</p>
        </Link>
        <button
          type="button"
          data-testid="product-add-to-cart"
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
    price: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
