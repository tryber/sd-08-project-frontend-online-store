import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SearchBar from './SearchBar';
import ProductCard from './ProductCard';
// import Loading from './Loading';
// import NotFound from './NotFound';

// import { getRandomProducts } from '../helpers/products';
import { parseProductData } from '../helpers/helpers';
import * as api from '../services/api';
import { actionUpdate, actionClear } from '../store/products.reducer';
import { actionUpdate as actionUpdateDetails } from '../store/details.reducer';

//  const [error, setError] = useState(false);
export default function ProductList() {
  // const [productList, setProductList] = useState([]);
  const productList = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [search, setSearch] = useState([undefined, undefined]);
  const easterEgg = (value) => {
    if (value === 'icaro' || value === 'icaro harry') {
      const icaro = {
        id: 'PROFESSOR',
        title: 'Icaro Harry',
        price: 1000000,
        category_id: 'professor',
        mercadopago: true,
        shipping: true,
        thumbnail: '/icaro.jpeg',
        stock: 1,
      };
      console.log(value);
      dispatch(actionClear());
      dispatch(actionUpdate([icaro]));
      dispatch(actionUpdateDetails([icaro]));
      return true;
    }
    return false;
  };
  const getProductList = async (category, query) => {
    // setProductList([]);
    dispatch(actionUpdate([]));
    if (easterEgg(search[1])) {
      return;
    }
    try {
      const data = await api.getProductsFromCategoryAndQuery(category, query);
      const products = await parseProductData(data.results);
      dispatch(actionUpdate(products));
      dispatch(actionUpdateDetails(products));
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
