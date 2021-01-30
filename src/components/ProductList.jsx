import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import ProductCard from './ProductCard';
// import Loading from './Loading';
// import NotFound from './NotFound';

// import { getRandomProducts } from '../helpers/products';
import { parseProductData } from '../helpers/helpers';
import * as api from '../services/api';

//  const [error, setError] = useState(false);
export default function ProductList() {
  const [productList, setProductList] = useState([]);
  const [search, setSearch] = useState([undefined, undefined]);
  const getProductList = async () => {
    setProductList([]);
    try {
      const data = await api.getProductsFromCategoryAndQuery(search[0], search[1]);
      const products = await parseProductData(data.results);
      setProductList(products);
    } catch (e) {
      setProductList([]);
    }
  };
  const handleQueryChange = (data) => {
    setSearch([search[0], data]);
  };
  const handleCategoryChange = (data) => {
    setSearch([data, search[1]]);
    getProductList(data, search[1]);
  };

  /* useEffect(() => {
    getProductList();
  }, [search]); */

  return (
    <section className="content">
      <SearchBar
        handleQueryChange={ handleQueryChange }
        handleCategoryChange={ handleCategoryChange }
      />
      <section className="product-list">
        <button type="button" onClick={ getProductList } data-testid="query-button">
          Pesquisa
        </button>
        {/* <Loading show={ loading } /> */}
        {productList.length > 0
          ? productList.map((product) => (
            <ProductCard key={ product.id } product={ product } />
          ))
          : null}
      </section>
    </section>
  );
}
