import React from 'react';
import PropTypes from 'prop-types';

export default function CartButtonClear(props) {
  const { handleClick } = props;
  return (
    <button className="cart-clear-button" type="button" onClick={ handleClick }>
      Limpar Carrinho
    </button>
  );
}

CartButtonClear.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
