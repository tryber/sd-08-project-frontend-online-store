import React from 'react';
import PropTypes from 'prop-types';

import './productCard.css';

class ProductCard extends React.Component {
  render() {
    const { card: { title, thumbnail, price } } = this.props;
    return (
      <section data-testid="product" className="product-card">
        <p>{title}</p>
        <img src={ thumbnail } alt={ title } />
        <p>{`R$${price}`}</p>
      </section>
    );
  }
}

ProductCard.propTypes = {
  card: PropTypes.shape({
    title: String,
    thumbnail: String,
    price: String,
  }).isRequired,
};

export default ProductCard;
