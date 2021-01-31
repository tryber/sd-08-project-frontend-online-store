import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ProductCard.css';
import { Link } from 'react-router-dom';

class ProductCard extends Component {
  render() {
    const { id, title, image, price, attributes } = this.props;
    return (
      <div
        id="first-card-category"
        data-testid="product"
        className="card-container"
      >
        <span className="product-title">{title}</span>
        <img className="product-image" src={ image } alt="Product Tumbnail" />
        <span className="product-price">{price}</span>
        <Link
          className="details"
          to={ {
            pathname: `/ProductDetails/${id}`,
            state: { title, image, price, attributes },
          } }
          data-testid="product-detail-link"
        >
          Detalhes
        </Link>
      </div>
    );
  }
}

ProductCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  attributes: PropTypes.arrayOf(Object).isRequired,
};
export default ProductCard;
