import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ProductCard.css';

class ProductCard extends Component {
  render() {
    const { title, image, price } = this.props;
    return (
      <div className="card-container">
        <span className="product-title">{title}</span>
        <img className="product-image" src={ image } alt="Product Tumbnail" />
        <span className="product-price">{price}</span>
      </div>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};
export default ProductCard;
