import React, { Component } from 'react';
import CategoriesFilter from '../components/CategoriesFilter';
import ProductCard from '../components/ProductCard';
import InputSearch from '../components/InputSearch';
import * as api from '../services/api';
import * as localStorage from '../services/localStorage';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      categoryId: '',
      productsCard: [],
      query: '',
      cartSize: localStorage.showQuantInCart(),
    };
    this.handleChange = this.handleChange.bind(this);
    this.getProdutsByQuery = this.getProdutsByQuery.bind(this);
    this.addToCar = this.addToCar.bind(this);
  }

  handleChange({ target: { name, id } }) {
    this.setState({ [name]: id }, () => {
      this.getProdutsByQuery();
    });
  }

  async getProdutsByQuery() {
    const { categoryId, query } = this.state;
    const searchResult = await api.getProductsFromCategoryAndQuery(categoryId, query);
    this.setState({ productsCard: searchResult.results });
  }

  addToCar() {
    this.setState({ cartSize: localStorage.showQuantInCart() });
  }

  render() {
    const { productsCard, query, cartSize } = this.state;
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
        <ProductCard productsCard={ productsCard } addToCar={ this.addToCar } />
      </div>
    );
  }
}

export default Home;
