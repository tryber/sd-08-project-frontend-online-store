import React, { Component } from 'react';
import ShoppingCartIcon from './ShoppingCartIcon';

class SearchBar extends Component {
  render() {
    return (
      <div>
        <input type="text" />
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        <ShoppingCartIcon />
      </div>
    );
  }
}

export default SearchBar;
