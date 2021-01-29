import React from 'react';
import Categories from './Categories';
import ProductSearch from './ProductSearch';

import ButtonCheckout from './ButtonCheckout';

export default function Header() {
  return (
    <header>
      <ProductSearch />
      <Categories />
      <ButtonCheckout />
    </header>
  );
}
