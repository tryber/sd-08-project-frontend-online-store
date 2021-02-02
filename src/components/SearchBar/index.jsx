import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  listItemCart(searchText, onSearchTextChange) {
    return (
      <div>
        <input
          name="searchText"
          type="text"
          value={ searchText }
          onChange={ onSearchTextChange }
          data-testid="query-input"
        />
      </div>
    );
  }

  render() {
    const { onChange, value, handleSearch } = this.props;
    return (
      <header>
        {this.listItemCart(value, onChange)}
        <button
          type="button"
          onClick={ handleSearch }
          data-testid="query-button"
        >
          Pesquisar
        </button>
        <h3 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h3>
      </header>
    );
  }
}

SearchBar.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default SearchBar;
