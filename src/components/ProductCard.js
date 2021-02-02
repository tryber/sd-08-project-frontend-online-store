import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    const { product } = this.props;
    const { title, price, thumbnail } = product;
    return (
      <div data-testid="product">
        <h1>{title}</h1>
        <img src={ thumbnail } alt={ title } />
        <p>{price}</p>
        <h2>
          <Link
            to={ { pathname: '/product-details', product } }
            data-testid="product-detail-link"
          >
            Detalhes
          </Link>
        </h2>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
