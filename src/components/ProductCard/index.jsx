import React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { productInfo } = this.props;
    return (
      <div className="prodContainer" data-testid="product">
        <img src={ productInfo.thumbnail } alt="product img" />
        <h3>{productInfo.title}</h3>
        <h4>{productInfo.price}</h4>
      </div>
    );
  }
}

ProductCard.propTypes = {
  productInfo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;
