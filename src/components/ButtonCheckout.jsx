import React, { useState, useEffect } from 'react';

export default function ButtonCheckout() {
  const [count, setCount] = useState(0);

  const handleClickCheckout = () => {
    console.log('checkout');
  };

  const checkoutCounter = () => {
    setCount(0);
  };

  useEffect(() => {
    checkoutCounter();
  });

  return (
    <button type="button" className="header-right" onClick={ handleClickCheckout }>
      <img className="checkout-image" src="checkout.png" alt="checkout" />
      <span className="checkout-count">{count}</span>
    </button>
  );
}
