import React from "react";
import { useDispatch } from "react-redux";

import { actionSlideClose } from "../../store/control.reducer";

export default function CartMenu() {
  const dispatch = useDispatch();

  const handleCloseClick = () => {
    dispatch(actionSlideClose());
  };

  return (
    <header className="cart-slide-menu">
      <button
        type="button"
        className="menu-close-button"
        onClick={handleCloseClick}
      >
        <i className="fas fa-times-circle menu-close-icon" />
      </button>
    </header>
  );
}
