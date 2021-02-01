import React, { Component } from 'react';
import CategoriesFilter from '../components/CategoriesFilter';
import ProductCard from '../components/ProductCard';
import InputSearch from '../components/InputSearch';
import * as api from '../services/api';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      categoryId: '',
      productCard: [],
      query: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.getProdutsByQuery = this.getProdutsByQuery.bind(this);
  }

  handleChange({ target: { name, id } }) {
    this.setState({ [name]: id }, () => {
      this.getProdutsByQuery();
    });
  }

  async getProdutsByQuery() {
    const { categoryId, query } = this.state;
    const searchResult = await api.getProductsFromCategoryAndQuery(categoryId, query);
    this.setState({ productCard: searchResult.results });
  }

  render() {
    const { productCard, query, cartSize } = this.state;
    return (
      <div className="App">
        <InputSearch
          query={ query }
          onChange={ ({ target: { name, value } }) => this.setState({ [name]: value }) }
          onClick={ this.getProdutsByQuery }
          cartSize={ cartSize }
        />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <CategoriesFilter handleChange={ this.handleChange } />
        <ProductCard productCard={ productCard } />
      </div>
    );
  }
}

export default Home;
