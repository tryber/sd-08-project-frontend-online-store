import React from 'react';

import * as api from '../services/api';
import SearchBar from '../components/SearchBar';
import Categories from './Categories';
import ProductCardsList from '../components/ProductCardsList';

export default class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      categoriesList: [],
      category: '',
      productList: [],
      search: '',
    };

    this.productByCategory = this.productByCategory.bind(this);
    this.fetchProducts = this.fetchProducts.bind(this);
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

  async fetchProducts() {
    const { category, search } = this.state;
    const products = await api.getProductsFromCategoryAndQuery(category, search);
    this.setState({
      productList: products.results,
    });
  }

  productByCategory(event) {
    const idByChoice = event.target.id;
    this.setState({
      category: idByChoice,
    }, () => { this.fetchProducts(); });
  }

  render() {
    const { categoriesList, productList } = this.state;
    return (
      <main>
        <SearchBar />
        {categoriesList.length < 1
          ? <p>Carregando...</p>
          : (
            <Categories
              categoriesList={ categoriesList }
              productByCategory={ this.productByCategory }
              renderProductList={ this.fetchProducts }
            />
          )}
        <ProductCardsList productList={ productList } />
      </main>
    );
  }
}
