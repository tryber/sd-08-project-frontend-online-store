import React from 'react';

export default function CartMenu() {
  return (
    <header className="cart-slide-menu">
      <button
        type="button"
        className="menu-close-button"
        onClick={ () => console.log('close') }
      >
        <i className="fas fa-times-circle menu-close-icon" />
      </button>
    </header>
  );
}
