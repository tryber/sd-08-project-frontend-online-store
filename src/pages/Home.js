import React from 'react';

import * as api from '../services/api';
import SearchBar from '../components/SearchBar';
import Categories from './Categories';
import ProductCardsList from '../components/ProductCardsList';

export default class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      categoriesList: [0],
      productList: [],
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  async fetchCategories() {
    const allCategories = await api.getCategories();
    this.setState({
      categoriesList: allCategories,
    });
  }

  async fetchProducts(category, search) {
    const products = await api.getProductsFromCategoryAndQuery(category, search);
    this.setState({
      productList: products,
    });
  }

  render() {
    const { categoriesList, productList } = this.state;
    return (
      <main>
        <SearchBar />
        {typeof (categoriesList) !== 'undefined'
          && (
            <aside>
              {categoriesList.length === 1
                ? <p>Carregando...</p>
                : <Categories categoriesList={ categoriesList } />}
            </aside>
          )}
        <ProductCardsList productList={ productList } />
      </main>
    );
  }
}
