import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <div className="search-bar-content">
        <input
          id="search-bar"
          className="search-bar"
          type="text"
          placeholder="Digite aqui"
        />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

export default SearchBar;
