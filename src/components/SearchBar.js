import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <div className="header">
        <input type="text" placeholder="Buscar" className="input" />
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
      </div>
    );
  }
}

export default SearchBar;
