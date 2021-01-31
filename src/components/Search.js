import React from 'react';
import PropTypes from 'prop-types';
import * as mercadolibreAPI from '../services/api';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      loading: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.fetchQuery = this.fetchQuery.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState((state) => ({
      ...state, [name]: value,
    }));
  }

  async fetchQuery() {
    const { searchText } = this.state;
    const query = searchText.replace(/\s/ig, '+');
    const { getProductsFromCategoryAndQuery } = mercadolibreAPI;
    const fetchQuery = await getProductsFromCategoryAndQuery(query, '');
    const { onClick } = this.props;
    onClick(fetchQuery.results);
  }

  renderInputSearch() {
    const { searchText } = this.state;
    return (
      <div>
        <input
          value={ searchText }
          type="search"
          name="searchText"
          id="id-search"
          data-testid="query-input"
          onChange={ this.handleChange }
        />
        <button
          type="button"
          onClick={ this.fetchQuery }
          data-testid="query-button"
        >
          Pesquisar!
        </button>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderInputSearch()}
      </div>
    );
  }
}

Search.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Search;
