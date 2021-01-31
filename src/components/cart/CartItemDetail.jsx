import React from "react";
import PropTypes from "prop-types";

export default function CartItemDetail(props) {
  const { id, name } = props;
  return (
    <>
      <div className="item-id">{id}</div>
      <div className="item-title" data-testid="shopping-cart-product-name">
        {name}
      </div>
    </>
  );
}

CartItemDetail.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
