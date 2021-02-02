import React from 'react';
import PropTypes from 'prop-types';

export default function InputCpf(props) {
  const { handleChange } = props;
  return (
    <input type="text" name="cpf" data-testid="checkout-cpf" onChange={ handleChange } />
  );
}

InputCpf.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
