import React from 'react';

export default function SearchBar() {
  return (
    <section className="product-search">
      <input
        className="product-search-input"
        type="text"
        placeholder="Buscar produtos, marcas e muito mais..."
      />
    </section>
  );
}
