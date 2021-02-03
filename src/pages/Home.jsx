import React, { Component } from 'react';
import CategoriesFilter from '../components/CategoriesFilter';
import ProductCard from '../components/ProductCard';
import ProductCar from '../components/ProductCar';
import InputSearch from '../components/InputSearch';
import * as api from '../services/api';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      categoryId: '',
      productsCard: [],
      productsCar: [],
      query: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.getProdutsByQuery = this.getProdutsByQuery.bind(this);
    this.handleAddToCard = this.handleAddToCard.bind(this);
  }

  handleChange({ target: { name, id } }) {
    this.setState({ [name]: id }, () => {
      this.getProdutsByQuery();
    });
  }

  handleAddToCard(object) {
    const { productsCar } = this.state;
    this.setState({ productsCar: [...productsCar, object] });
  }

  async getProdutsByQuery() {
    const { categoryId, query } = this.state;
    const searchResult = await api.getProductsFromCategoryAndQuery(categoryId, query);
    this.setState({ productsCard: searchResult.results });
  }

  render() {
    const { productsCard, query, productsCar } = this.state;
    return (
      <div className="App">
        <InputSearch
          query={ query }
          onChange={ ({ target: { name, value } }) => this.setState({ [name]: value }) }
          onClick={ this.getProdutsByQuery }
        />
        <ProductCar cartSize={ productsCar.length } productsCar={ productsCar } />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <CategoriesFilter handleChange={ this.handleChange } />
        <ProductCard
          productsCard={ productsCard }
          productsCar={ productsCar }
          addToCar={ this.handleAddToCard }
        />
      </div>
    );
  }
}

export default Home;
