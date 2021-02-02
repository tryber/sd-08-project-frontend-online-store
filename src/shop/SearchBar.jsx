import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <div className="from-group">
        <label htmlFor="searchBar">
          <input
            type="text"
            className="form-control fas fa-search"
            placeholder=""
          />
        </label>
      </div>
    );
  }
}

export default SearchBar;
