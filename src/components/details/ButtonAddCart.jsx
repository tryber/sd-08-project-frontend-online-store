import React from 'react';
import PropTypes from 'prop-types';

export default function ButtonAddCart(props) {
  const { handleClick } = props;
  return (
    <button
      data-testid="product-detail-add-to-cart"
      className="button-add-cart"
      type="button"
      onClick={ handleClick }
    >
      Adicionar ao Carrinho
    </button>
  );
}

ButtonAddCart.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
