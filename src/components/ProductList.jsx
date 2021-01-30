import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import ProductCard from './ProductCard';
import Loading from './Loading';

import { getRandomProducts } from '../helpers/products';
import { shuffle } from '../helpers/helpers';

export default function ProductList() {
  const [productList, setProductList] = useState([]);

  const getDefaultProductList = async () => {
    const list = await getRandomProducts();
    const products = await shuffle(list.filter((i) => i !== null && i !== undefined));
    setProductList(products);
  };

  useEffect(() => {
    if (productList.length === 0) {
      getDefaultProductList();
    }
  });

  return (
    <section className="content">
      <SearchBar />
      <section className="product-list">
        {productList.length > 0 ? (
          productList.map((product, i) => <ProductCard key={ i } { ...product } />)
        ) : (
          <Loading />
        )}
      </section>
    </section>
  );
}
