import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { CategoryList, ListCard } from '../components';

import * as api from '../services/api';

class ProductsList extends Component {
  constructor() {
    super();
    this.state = {
      categoryId: '',
      search: '',
      results: [],
      everyList: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.handleChangeCategory = this.handleChangeCategory.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.renderList = this.renderList.bind(this);
  }

  componentDidMount() {
    this.renderList();
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  async handleChangeCategory(event) {
    this.setState({
      [event.target.name]: event.target.id,
    });
    await this.handleClick();
  }

  async handleClick() {
    const { categoryId, search } = this.state;
    await api.getProductsFromCategoryAndQuery(categoryId, search).then((data) => {
      this.setState({
        results: data.results,
        everyList: '',
      });
    });
  }

  handleEnter(event) {
    if (event.key === 'Enter') {
      this.handleClick();
    }
  }

  async renderList() {
    await api.getProductsFromCategoryAndQuery().then((data) => {
      this.setState({
        everyList: data.results,
      });
    });
  }

  render() {
    const { results, search, everyList } = this.state;
    return (
      <main>
        <Link to="/shoppingcart" data-testid="shopping-cart-button">Cart</Link>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
          <br />
          <input
            data-testid="query-input"
            name="search"
            onChange={ this.handleChange }
            onKeyDown={ this.handleEnter }
            type="text"
          />
          <button
            type="button"
            data-testid="query-button"
            onClick={ this.handleClick }
          >
            PESQUISAR
          </button>
        </p>
        <CategoryList />
        {everyList !== ''
          ? everyList.map((item) => <ListCard key={ item.id } item={ item } />) : ''}
        {results
          .map((item) => (
            <ListCard search={ search } key={ item.id } item={ item } />))}
        </p>
        <br />
        <input
          data-testid="query-input"
          name="search"
          onChange={ this.handleChange }
          type="text"
        />
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.handleClick }
        >
          PESQUISAR
        </button>
        <br />
        <CategoryList onClick={ this.handleChangeCategory } />
        {results
          .map((item) => (
            <ListCard key={ item.id } item={ item } />))}
      </main>
    );
  }
}

export default ProductsList;
