import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    const { productInfo } = this.props;
    return (
      <div className="prodContainer" data-testid="product">
        <img src={ productInfo.thumbnail } alt="product img" />
        <h3>{productInfo.title}</h3>
        <h4>
          R$
          {' '}
          {productInfo.price}
        </h4>
        <Link
          to={ `/product-details/${productInfo.id}` }
          data-testid="product-detail-link"
        >
          Detalhes
        </Link>
      </div>
    );
  }
}

ProductCard.propTypes = {
  productInfo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;
