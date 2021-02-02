import React from 'react';
import PropTypes from 'prop-types';

export default function CartItemControl(props) {
  const { handleAdd, handleRemove } = props;

  return (
    <div className="item-control">
      <button data-testid="product-increase-quantity" type="button" onClick={ handleAdd }>
        <i className="fas fa-plus" />
      </button>
      <button
        data-testid="product-decrease-quantity"
        type="button"
        onClick={ handleRemove }
      >
        <i className="fas fa-minus" />
      </button>
    </div>
  );
}

CartItemControl.propTypes = {
  handleAdd: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
};
