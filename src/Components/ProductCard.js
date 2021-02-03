import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    const { title, price, thumbnail, attributes } = this.props;
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
      </section>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  attributes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductCard;
