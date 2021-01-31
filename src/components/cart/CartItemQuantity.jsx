import React from "react";
import PropTypes from "prop-types";

export default function CartItemQuantity(props) {
  const { value } = props;
  return (
    <div className="item-count" data-testid="shopping-cart-product-quantity">
      {value}
    </div>
  );
}

CartItemQuantity.propTypes = {
  value: PropTypes.number.isRequired,
};
