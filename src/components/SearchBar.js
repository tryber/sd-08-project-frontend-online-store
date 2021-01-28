import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <div>
        <form>
          <label data-testid="home-initial-message" htmlFor="inputSearch">
            <input
              type="text"
              name="inputSearch"
              // value={}
              // onChange={}
            />
            Digite algum termo de pesquisa ou escolha uma categoria.
          </label>
        </form>
      </div>
    );
  }
}

export default SearchBar;
