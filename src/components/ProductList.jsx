import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SearchBar from './SearchBar';
import ProductCard from './ProductCard';
// import Loading from './Loading';
// import NotFound from './NotFound';

// import { getRandomProducts } from '../helpers/products';
import { parseProductData } from '../helpers/helpers';
import * as api from '../services/api';
import { actionUpdate } from '../store/products.reducer';

//  const [error, setError] = useState(false);
export default function ProductList() {
  // const [productList, setProductList] = useState([]);
  const productList = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [search, setSearch] = useState([undefined, undefined]);
  const getProductList = async (category, query) => {
    // setProductList([]);
    dispatch(actionUpdate([]));
    try {
      const data = await api.getProductsFromCategoryAndQuery(category, query);
      const products = await parseProductData(data.results);
      dispatch(actionUpdate(products));
      // setProductList(products);
    } catch (e) {
      // setProductList([]);
      dispatch(actionUpdate([]));
    }
  };
  const handleQueryChange = (data) => {
    setSearch([search[0], data]);
  };
  const handleCategoryChange = (data) => {
    setSearch([data, search[1]]);
    getProductList(data, search[1]);
  };
  const handleQueryClick = () => {
    getProductList(search[0], search[1]);
  };

  return (
    <section className="content">
      <SearchBar
        handleQueryChange={ handleQueryChange }
        handleCategoryChange={ handleCategoryChange }
        handleQueryClick={ handleQueryClick }
      />
      <section className="product-list">
        {/* <button type="button" onClick={ getProductList } data-testid="query-button">
          Pesquisa
        </button> */}
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
