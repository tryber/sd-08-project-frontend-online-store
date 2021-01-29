import React from 'react';

import ProductCard from './ProductCard';

export default function ProductList() {
  return (
    <section>
      <h1>ProductCard</h1>
      <section>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </section>
    </section>
  );
}
