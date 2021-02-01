import React, { useState } from 'react';
import PropTypes from 'prop-types';

function InputQuantity(props) {
  const { value, onHandleChange } = props;
  const [quantity, setQuantity] = useState(value);

  const handleIncClick = () => {
    setQuantity(quantity + 1);
    if (onHandleChange) {
      onHandleChange(value + 1);
    }
  };
  const handleDecClick = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      if (onHandleChange) {
        onHandleChange(quantity - 1);
      }
    }
  };

  return (
    <div className="input-quantity">
      <input type="number" value={ quantity } value={ value } />
      <button type="button" onClick={ handleIncClick }>
        <i className="fas fa-plus" />
      </button>
      <button type="button" onClick={ handleDecClick }>
        <i className="fas fa-minus" />
      </button>
    </div>
  );
}

InputQuantity.defaultProps = {
  onHandleChange: null,
};

InputQuantity.propTypes = {
  value: PropTypes.number.isRequired,
  onHandleChange: PropTypes.func,
};

export default InputQuantity;
