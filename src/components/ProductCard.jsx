import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { product } = this.props;
    const { id, title, thumbnail, price } = product;

    return (
      <li data-testid="product" id={ id }>
        <Link to={ `/products/${id}` } data-testid="product-detail-link">
          <div className="product-card">
            <h4>{title}</h4>
            <img alt="Product" src={ thumbnail } />
            <p>{`R$ ${price.toFixed(2)}`}</p>
          </div>
        </Link>
      </li>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default ProductCard;
