import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import ProductCard from './ProductCard';
import Loading from './Loading';
import NotFound from './NotFound';

// import { getRandomProducts } from '../helpers/products';
import { parseProductData } from '../helpers/helpers';
import * as api from '../services/api';

export default function ProductList() {
  const [productList, setProductList] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const getProductList = async () => {
    setLoading(true);
    try {
      const data = await api.getProductsFromCategoryAndQuery();
      const products = await parseProductData(data.results);
      console.log(products);
      // const products = await shuffle(list.filter((i) => i !== null && i !== undefined));
      setProductList(products);
    } catch (e) {
      setError(true);
      setProductList([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (productList.length === 0 && !error) {
      getProductList();
    }
  }, [productList]);

  return (
    <section className="content">
      <SearchBar />
      <section className="product-list">
        <NotFound show={ error } />
        <Loading show={ loading } />
        {productList.length > 0
          ? productList.map((product) => (
            <ProductCard key={ product.id } product={ product } />
          ))
          : null}
      </section>
    </section>
  );
}
