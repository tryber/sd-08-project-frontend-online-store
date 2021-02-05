import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';

import { useSelector, useDispatch } from 'react-redux';
import { actionSlideOpen } from '../store/control.reducer';

export default function ButtonCart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  const [prevc, setPrevc] = useState(0);
  const [move, setMove] = useState(false);

  const checkoutCounter = () => {
    setCount(cart.length);
    setPrevc(0);
  };

  useEffect(() => {
    checkoutCounter();
  }, [cart]);

  useEffect(() => {
    console.log('val', count, prevc);
    if (count > 0 && count > prevc) {
      console.log('anim');
      setMove(true);
      setTimeout(() => {
        console.log('anim end');
        setMove(false);
        setPrevc(count);
      }, 1000);
    }
  }, [count, prevc]);

  const handleClickCart = () => {
    dispatch(actionSlideOpen());
    // history.push('/cart');
  };

  return (
    <button
      type="button"
      data-testid="shopping-cart-button"
      className={ move ? 'cart-button anim-move' : 'cart-button' }
      onClick={ handleClickCart }
    >
      <img className="cart-image" src="/icon-cart.png" alt="cart" />
      <span className="cart-count" data-testid="shopping-cart-size">
        {count}
      </span>
    </button>
  );
}
