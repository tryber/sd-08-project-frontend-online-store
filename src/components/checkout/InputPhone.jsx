import React from 'react';
import PropTypes from 'prop-types';

export default function InputPhone(props) {
  const { handleChange } = props;
  return (
    <input
      type="text"
      name="phone"
      data-testid="checkout-phone"
      onChange={ handleChange }
    />
  );
}

InputPhone.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
