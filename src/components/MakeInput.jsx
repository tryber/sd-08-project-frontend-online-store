import React from 'react';
import PropTypes from 'prop-types';

function MakeInput(props) {
  const {
    name,
    type,
    maxLength,
    labelName,
  } = props;

  return (
    <>
      <input
        defaultValue={ labelName }
        data-testid={ `checkout-${name}` }
        type={ type }
        id={ name }
        name={ name }
        maxLength={ maxLength }
        required
      />
      <br />
    </>
  );
}

MakeInput.defaultProps = {
  type: 'text',
  maxLength: 40,
};

MakeInput.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  maxLength: PropTypes.number,
  labelName: PropTypes.string.isRequired,
};

export default MakeInput;
