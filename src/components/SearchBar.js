import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css';

class SearchBar extends Component {
  constructor() {
    super();
    this.setQuery = this.setQuery.bind(this);
    this.state = {
      query: '',
    };
  }

  setQuery(event) {
    this.setState({ query: event.target.value });
  }

  render() {
    const { requestProducts } = this.props;
    const { query } = this.state;
    return (
      <div className="searchbar-container">
        <form>
          <label data-testid="home-initial-message" htmlFor="inputSearch">
            <input
              data-testid="query-input"
              type="text"
              onChange={ this.setQuery }
            />
            <button
              data-testid="query-button"
              type="button"
              onClick={ () => requestProducts(query) }
            >
              Pesquisar
            </button>
            <br />
            Digite algum termo de pesquisa ou escolha uma categoria.
          </label>
        </form>
      </div>
    );
  }
}
SearchBar.propTypes = {
  requestProducts: PropTypes.func.isRequired,
};
export default SearchBar;
