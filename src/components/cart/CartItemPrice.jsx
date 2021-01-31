import React from "react";
import PropTypes from "prop-types";

export default function CartItemPrice(props) {
  const { value } = props;
  return (
    <div className="item-price">
      R$
      {value.toFixed(2).split(".").join(",")}
    </div>
  );
}

CartItemPrice.propTypes = {
  value: PropTypes.number.isRequired,
};
