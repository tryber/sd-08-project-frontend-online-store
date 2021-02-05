import React from 'react';
import PropTypes from 'prop-types';

import CartItemSum from './CartItemSum';
import CartItemControl from './CartItemControl';
import CartItemPrice from './CartItemPrice';
import CartItemQuantity from './CartItemQuantity';
import CartItemDetail from './CartItemDetail';

export default function CartListItem(props) {
  const { item, handleItemAdd, handleItemRemove } = props;
  return (
    <div className="shopping-cart-list-item">
      <div className="cart-slide-box">
        <CartItemDetail id={ item.id } name={ item.title } />
      </div>
      <CartItemPrice value={ parseFloat(item.price) } />
      <CartItemQuantity value={ item.quantity } />
      <CartItemControl
        handleAdd={ () => handleItemAdd({ ...item }) }
        handleRemove={ () => handleItemRemove(item) }
        max={ item.stock }
      />
      <CartItemSum value={ item.total } />
    </div>
  );
}

CartListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired,
  }).isRequired,
  handleItemAdd: PropTypes.func.isRequired,
  handleItemRemove: PropTypes.func.isRequired,
};
