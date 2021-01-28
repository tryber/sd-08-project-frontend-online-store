import React from 'react';

class SearchBar extends React.Component {
  listItemCart(searchText, onSearchTextChange) {
    return (
      <div>
        <input
          name="searchText"
          type="text"
          value={ searchText }
          onChange={ onSearchTextChange }
        />
        <h3 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h3>
      </div>
    );
  }

  render() {
    return (
      <header>
        {this.listItemCart(searchText, onSearchTextChange)}
      </header>
    );
  }
}

export default SearchBar;
