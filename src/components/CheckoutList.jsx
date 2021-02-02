import React from 'react';
import PropTypes from 'prop-types';

class CheckoutList extends React.Component {

render() {
  const { product, quantity } = this.props;
  return (
    <li>
      <img src={ product.thumbnail } alt="product model" />
      <h3>{ product.title }</h3>
      <h4>Quantidade: {quantity}</h4>
      <h4>Valor unitário: {product.price}</h4>
    </li>
  );
  }
}

export default CheckoutList;

CheckoutList.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  quantity: PropTypes.number.isRequired,
};