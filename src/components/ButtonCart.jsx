import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const DEF_CART_KEY = 'CART_ITENS';

export default function ButtonCart() {
  const [count, setCount] = useState(0);
  const history = useHistory();

  const checkoutCounter = (props) => {
    const data = localStorage.getItem(DEF_CART_KEY);
    if (data === '' || !data) {
      setCount(0);
    } else {
      const cart = JSON.parse(data);
      setCount(cart.length);
    }
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
