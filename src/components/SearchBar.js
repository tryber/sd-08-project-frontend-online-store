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
      categoryID: '',
      changed: false,
    };
  }

  setQuery(event) {
    this.setState({ query: event.target.value, changed: true });
  }

  setCategory(event) {
    const { requestProducts } = this.props;
    this.setState({ categoryID: event.target.id }, () => {
      const { query, categoryID } = this.state;
      return requestProducts(categoryID, query);
    });
  }

  render() {
    const { requestProducts } = this.props;
    const { query, categoryID, changed } = this.state;
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
            {!changed
              && <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>}
          </label>
        </form>
        <CategoryList onClick={ this.setCategory } />
      </div>
    );
  }
}
SearchBar.propTypes = {
  requestProducts: PropTypes.func.isRequired,
};
export default SearchBar;
