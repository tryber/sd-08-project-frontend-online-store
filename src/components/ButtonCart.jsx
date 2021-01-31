import React, { useState, useEffect } from "react";
// import { useHistory } from 'react-router-dom';

import { useSelector, useDispatch } from "react-redux";
import { actionSlideOpen } from "../store/control.reducer";

export default function ButtonCart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);

  const checkoutCounter = () => {
    setCount(cart.length);
  };

  useEffect(() => {
    checkoutCounter();
  }, [cart]);

  const handleClickCart = () => {
    dispatch(actionSlideOpen());
    // history.push('/cart');
  };

  return (
    <button
      type="button"
      data-testid="shopping-cart-button"
      className="cart-button"
      onClick={handleClickCart}
    >
      <img className="cart-image" src="/icon-cart.png" alt="cart" />
      <span className="cart-count">{count}</span>
    </button>
  );
}
