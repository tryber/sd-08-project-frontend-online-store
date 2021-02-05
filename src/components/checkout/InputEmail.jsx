import React from 'react';
import PropTypes from 'prop-types';

export default function InputEmail(props) {
  const { handleChange } = props;
  return (
    <input
      type="text"
      name="email"
      data-testid="checkout-email"
      onChange={ handleChange }
    />
  );
}

InputEmail.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
