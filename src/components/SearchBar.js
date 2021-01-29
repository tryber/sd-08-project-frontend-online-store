import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css';
import CategoryList from './CategoryList';

class SearchBar extends Component {
  constructor() {
    super();
    this.setQuery = this.setQuery.bind(this);
    this.setCategory = this.setCategory.bind(this);
    this.state = {
      query: '',
      categoryID: 'ALL',
    };
  }

  setQuery(event) {
    this.setState({ query: event.target.value });
  }

  setCategory(event) {
    // console.log(event.target.id);
    this.setState({ categoryID: event.target.id });
  }

  render() {
    const { requestProducts } = this.props;
    const { query, categoryID } = this.state;
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
              onClick={ () => requestProducts(categoryID, query) }
            >
              Pesquisar
            </button>
            <br />
            Digite algum termo de pesquisa ou escolha uma categoria.
          </label>
        </form>
        <CategoryList onClick={ this.setCategory } />
      </div>
    );
  }
}
SearchBar.propTypes = {
  requestProducts: PropTypes.func.isRequired,
  categoryID: PropTypes.string.isRequired,
};
export default SearchBar;
