import React from 'react';
import PropTypes from 'prop-types';
import CartButtonClear from './CartButtonClear';
import CartButtonCheckout from './CartButtonCheckout';

export default function CartButtonBox(props) {
  const { handleClearCartClick } = props;

  return (
    <div className="box-button-cart">
      <CartButtonClear handleClick={ handleClearCartClick } />
      <CartButtonCheckout />
    </div>
  );
}

CartButtonBox.propTypes = {
  handleClearCartClick: PropTypes.func.isRequired,
};
