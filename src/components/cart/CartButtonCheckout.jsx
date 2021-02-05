import React from 'react';
import { useHistory } from 'react-router-dom';

export default function CartButtonCheckout() {
  const history = useHistory();
  const handleClick = () => {
    history.push('/checkout');
  };
  return (
    <button
      className="cart-checkout-button"
      type="button"
      onClick={ handleClick }
      data-testid="checkout-products"
    >
      Finalizar Compra
    </button>
  );
}
