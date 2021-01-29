import React from 'react';
import PropTypes from 'prop-types';

export default class ProductCard extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <div data-testid="product">
        <h3>{ product.title }</h3>
        <h5>{ product.price }</h5>
        <img alt={ product.title } src={ product.thumbnail } />
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape.isRequired,
};
