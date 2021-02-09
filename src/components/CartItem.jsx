import React from 'react';
import PropTypes from 'prop-types';

export default function CartItem(props) {
  const { id, title, quantity, handleAdd, handleRem } = props;
  return (
    <div>
      <h4>{id}</h4>
      <h4 data-testid="shopping-cart-product-name">{title}</h4>
      <h4 data-testid="shopping-cart-product-quantity">{quantity}</h4>
      <button type="button" data-testid="product-increase-quantity" onClick={ handleAdd }>+</button>
      <button type="button" data-testid="product-decrease-quantity" onClick={ handleRem }>-</button>
    </div>
  );
}

CartItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  handleAdd: PropTypes.func.isRequired,
  handleRem: PropTypes.func.isRequired,
};
