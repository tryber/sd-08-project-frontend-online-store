import React from 'react';
import PropTypes from 'prop-types';

export default function InputFullName(props) {
  const { handleChange } = props;
  return (
    <input
      type="text"
      name="fullname"
      data-testid="checkout-fullname"
      onChange={ handleChange }
    />
  );
}

InputFullName.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
