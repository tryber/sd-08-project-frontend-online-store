import React from 'react';
import PropTypes from 'prop-types';

import './productCard.css';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    const { card: { title, thumbnail, price, id } } = this.props;
    return (
      <section data-testid="product" className="product-card">
        <Link to={ `/productDetails/${title}` } data-testid="product-detail-link">
          <div>
            <p>{title}</p>
            <img src={ thumbnail } alt={ title } />
            <p>{`R$${price}`}</p>
          </div>
        </Link>
      </section>
    );
  }
}

ProductCard.propTypes = {
  card: PropTypes.shape({
    title: String,
    thumbnail: String,
    price: String,
    id: String,
  }).isRequired,
};

export default ProductCard;
