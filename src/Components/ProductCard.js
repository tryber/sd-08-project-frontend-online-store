import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import AddCart from './AddCart';

class ProductCard extends React.Component {
  render() {
    const {
      title,
      price,
      thumbnail,
      attributes,
      availableQuantity,
      onAddCart,
    } = this.props;
    const details = {
      pathname: '/details',
      state: {
        title,
        price,
        thumbnail,
        attributes,
      },
    };
    return (
      <section data-testid="product" className="product-card">
        <Link
          to={ details }
          data-testid="product-detail-link"
          className="product-card-title-img"
        >
          <h3 className="product-card-title">{title}</h3>
          <img className="product-card-image" alt={ title } src={ thumbnail } />
        </Link>
        <span className="product-card-price">{`R$: ${price}`}</span>
        <AddCart
          onAddCart={ () => onAddCart({
            title,
            price,
            thumbnail,
            attributes,
            availableQuantity,
          }) }
        />
      </section>
    );
  }
}

ProductCard.propTypes = {
  attributes: PropTypes.arrayOf(PropTypes.object).isRequired,
  availableQuantity: PropTypes.number.isRequired,
  onAddCart: PropTypes.func.isRequired,
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
};

export default ProductCard;
