import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  render() {
    return (
      <div className="searchbar-container">
        <form>
          <label data-testid="home-initial-message" htmlFor="inputSearch">
            <input
              type="text"
              name="inputSearch"
              // value={}
              // onChange={}
            />
            <br />
            Digite algum termo de pesquisa ou escolha uma categoria.
          </label>
        </form>
      </div>
    );
  }
}

export default SearchBar;
