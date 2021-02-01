import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

class ProductDetails extends React.Component {
  render() {
    const { location: { state: { product } } } = this.props;
    return (
      <div key={ product.id } data-testid="product">
        <p data-testid="product-detail-name">{ product.title }</p>
        <img src={ product.thumbnail } alt={ product.title } />
        <p>
          R$:
          { product.price }
        </p>
        <Link
          to={ {
            pathname: '/shoppingcart',
            state: { product },
          } }
          data-testid="product-detail-add-to-cart"
        >
          Adcionar ao carrinho
        </Link>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      product: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        thumbnail: PropTypes.string,
        price: PropTypes.number,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProductDetails;
