import React, { Component } from 'react';

import ListCard from './ListCard';
import * as api from '../services/api';

class ProductsList extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      results: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  async handleClick() {
    const { search } = this.state;
    await api.getProductsFromCategoryAndQuery(search, search).then((data) => {
      this.setState({
        results: data.results,
      });
    });
  }

  render() {
    const { results } = this.state;
    return (
      <main>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
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
          {results
            .map((item) => (
              <ListCard key={ item.id } item={ item } />))}
        </p>
      </main>
    );
  }
}

export default ProductsList;
