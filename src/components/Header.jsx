import React from 'react';
import ButtonCheckout from './ButtonCheckout';

export default function Header() {
  const handleClickCheckout = () => {
    console.log('checkout');
  };
  return (
    <header>
      <div className="header-wrap">
        <section className="header-left">
          <img className="shopping-logo" src="shopping.png" alt="logo" />
        </section>
        <ButtonCheckout className="header-right" />
      </div>
    </header>
  );
}
