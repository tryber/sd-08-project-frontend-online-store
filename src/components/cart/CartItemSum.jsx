import React from 'react';
import PropTypes from 'prop-types';

export default function CartItemSum(props) {
  const { value } = props;
  return (
    <div className="item-total">
      R$
      {value.toFixed(2).split('.').join(',')}
    </div>
  );
}

CartItemSum.propTypes = {
  value: PropTypes.number.isRequired,
};
