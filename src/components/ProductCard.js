import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ProductCard.css';
import { Link } from 'react-router-dom';
import FreeShipping from '../img/free-shipping-icon.png';
import AddItem from './AddItem';

class ProductCard extends Component {
  render() {
    const {
      id,
      title,
      image,
      price,
      attributes,
      availableQuantity,
      freeShipping,
      updateItensOnCart,
    } = this.props;
    return (
      <div data-testid="product" className="card-container">
        <span className="product-title">{title}</span>
        <img className="product-image" src={ image } alt="Product Tumbnail" />
        {freeShipping && (
          <img
            data-testid="free-shipping"
            className="free-shipping-image"
            src={ FreeShipping }
            alt="Frete grátis"
          />
        )}
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
        <AddItem
          title={ title }
          price={ price }
          availableQuantity={ availableQuantity }
          dataTestId="product-add-to-cart"
          updateItensOnCart={ updateItensOnCart }
        />
      </div>
    );
  }
}

ProductCard.propTypes = {
  updateItensOnCart: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  availableQuantity: PropTypes.number.isRequired,
  price: PropTypes.string.isRequired,
  attributes: PropTypes.arrayOf(Object).isRequired,
  freeShipping: PropTypes.bool.isRequired,
};
export default ProductCard;
