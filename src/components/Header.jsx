import React from 'react';

export default function Header() {
  return (
    <header>
      <div className="header-wrap">
        <section className="header-left">
          <img className="shopping-logo" src="shopping.png" alt="logo" />
        </section>

        <section className="header-right">
          <img className="checkout-image" src="checkout.png" alt="checkout" />
          <span className="checkout-count">3</span>
        </section>
      </div>
    </header>
  );
}
