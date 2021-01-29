import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <div className="search-bar-content">
        <input
          name="query"
          id="search-bar"
          data-testid="query-input"
          className="search-bar"
          type="text"
          placeholder="Digite aqui"
        />
        <button
          type="button"
          onClick={ onClick }
          data-testid="query-button"
        >
          Pesquisar
        </button>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

SearchBar.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default SearchBar;
