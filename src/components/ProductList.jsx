import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import ProductCard from './ProductCard';

export default function ProductList() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    // Atualiza o titulo do documento usando a API do browser
  });

  // const handleSearchInputChange = (e) => {
  //   setSearchText(e.target.value);
  // };

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
