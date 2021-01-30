import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default function ButtonCart() {
  const [count, setCount] = useState(0);
  const history = useHistory();

  const checkoutCounter = () => {
    setCount(0);
  };

  useEffect(() => {
    checkoutCounter();
  });

  const handleClickCart = () => {
    history.push('/cart');
  };

  return (
    <button
      type="button"
      data-testid="shopping-cart-button"
      className="cart-button"
      onClick={ handleClickCart }
    >
      <img className="cart-image" src="/icon-cart.png" alt="cart" />
      <span className="cart-count">{count}</span>
    </button>
  );
}
