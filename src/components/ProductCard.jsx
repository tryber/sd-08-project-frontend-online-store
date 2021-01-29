import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    const { productInfo, categoryID } = this.props;
    const { title, thumbnail, price, id } = productInfo;
    const path = `/product/${categoryID}&${id}`;
    return (
      <div className="product-card" data-testid="product">
        <h3>{ title }</h3>
        <img src={ thumbnail } alt="product model" />
        <h4>{price}</h4>
        <Link to={ path } data-testid="product-detail-link">Ver Detalhes</Link>
      </div>
    );
  }
  //
}

export default ProductCard;

ProductCard.propTypes = {
  productInfo: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string.isRequired,
  }).isRequired,
  categoryID: PropTypes.string.isRequired,
};
