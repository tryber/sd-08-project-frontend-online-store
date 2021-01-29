import React from 'react';
import SearchBar from './SearchBar';
import ProductCard from './ProductCard';

export default function ProductList() {
  return (
    <section className="content">
      <SearchBar />
      <section className="product-list">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
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
