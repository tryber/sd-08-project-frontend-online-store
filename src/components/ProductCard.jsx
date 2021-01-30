import React from 'react';
import PropTypes from 'prop-types';

export default class ProductCard extends React.Component {
  render() {
    const { product: { title, price, thumbnail } } = this.props;
    return (
      <span data-testid="product">
        <h3>{ title }</h3>
        <img alt={ title } src={ thumbnail } />
        <h5>{ `R$ ${price}` }</h5>
      </span>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape.isRequired,
};
