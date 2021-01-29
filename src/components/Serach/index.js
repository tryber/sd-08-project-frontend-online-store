import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
  render() {
    return (
      <div className="search">
        <label htmlFor="search" data-testid="home-initial-message">
          <p>
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
          <input
            className="search-input"
            id="search"
            name="search"
            placeholder="Faça uma Busca Por Produtos"
          />
        </label>
      </div>
    );
  }
}

export default Search;
