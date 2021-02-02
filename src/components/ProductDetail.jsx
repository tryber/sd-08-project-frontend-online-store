import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCar from './ProductCar';

class ProductDetail extends Component {
  render() {
    const { location: { state } } = this.props;

    return (
      <div data-testid="product-detail-name">
        <p>{ state.title }</p>
        <img src={ state.thumbnail } alt={ state.title } />
        <p>{ state.price }</p>
        <ProductCar />
      </div>
    );
  }
}

ProductDetail.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      title: PropTypes.string,
      thumbnail: PropTypes.string,
      price: PropTypes.number,
    }),
  }).isRequired,
};

export default ProductDetail;
