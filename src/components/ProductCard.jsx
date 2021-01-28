import React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { productInfo } = this.props;
    const { title, thumbnail, price } = productInfo;
    return (
      <section className="product-card">
        <h3>{title}</h3>
        <img src={ thumbnail } alt="product model" />
        <h4>{price}</h4>
      </section>
    );
  }
  //
}

export default ProductCard;

ProductCard.propTypes = {
  productInfo: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.string,
  }).isRequired,
};
