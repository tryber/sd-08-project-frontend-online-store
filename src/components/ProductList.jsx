import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import ProductCard from './ProductCard';

import { getRandomProducts } from '../helpers/products';

export default function ProductList() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    // Atualiza o titulo do documento usando a API do browser
  });

  const getDefaultProductList = async () => {
    //
  };

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
