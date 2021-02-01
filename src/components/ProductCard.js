import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { product } = this.props;
    const { id, title, price, thumbnail } = product;
    return (
      <div data-testid="product">
        <p>{title}</p>
        <p>{price}</p>
        <Link
          to={ {
            pathname: `/pages/productdetails/${id}`, product,
          } }
        >
          <img src={ thumbnail } alt="products" data-testid="product-detail-link" />
        </Link>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
};

export default ProductCard;
