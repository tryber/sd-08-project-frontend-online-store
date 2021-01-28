import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div data-testid="home-initial-message">
        <input type="text" />
        <h2>Digite algum termo de pesquisa ou escolha uma categoria.</h2>
      </div>
    );
  }
}

export default SearchBar;
