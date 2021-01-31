import React from "react";
import PropTypes from "prop-types";

export default function CartMessage(props) {
  const { quantity } = props;
  return (
    <div className="cart-message">
      {quantity === 0 ? (
        <div
          className="cart-empty-message"
          data-testid="shopping-cart-empty-message"
        >
          Seu carrinho está vazio
        </div>
      ) : null}
    </div>
  );
}

CartMessage.propTypes = {
  quantity: PropTypes.number.isRequired,
};
