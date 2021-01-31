import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import AddButtonCart from './AddButtonCart';

class ProductDetails extends React.Component {
  render() {
    const { location: { state: { product } } } = this.props;
    return (
      <div>
        <Link to="/">Home</Link>
        <div>
          <h1 data-testid="product-detail-name">
            {product.title}
          </h1>
          <span>R$</span>
          <span>{product.price}</span>
          <span>Quantidade</span>
          <span data-testid="shopping-cart-product-quantity">12</span>
        </div>
        <div>
          <img src={ product.thumbnail } alt={ product.title } />
          <ul>
            <li>{product.attributes[0].value_name}</li>
          </ul>
          <Link
            to={ {
              pathname: '/',
              search: '?sort=name',
              hash: '#the-hash',
              state: { product },
            } }
            data-testid="product-detail-link"
          >
            <AddButtonCart />
          </Link>
        </div>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      product: PropTypes.shape(PropTypes.object),
    }),
  }).isRequired,
};

export default ProductDetails;
