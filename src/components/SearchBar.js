import React, { Component } from 'react';
import Proptypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const { handleClick, handleChange, value } = this.props;
    return (
      <div>
        <input
          data-testid="query-input"
          type="text"
          className="input"
          name="query"
          value={ value }
          onChange={ handleChange }
        />
        <button
          data-testid="query-button"
          type="button"
          onClick={ handleClick }
        >
          Pesquisar
        </button>
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
      </div>
    );
  }
}

SearchBar.propTypes = {
  handleClick: Proptypes.func.isRequired,
  handleChange: Proptypes.func.isRequired,
  value: Proptypes.string.isRequired,
};

export default SearchBar;
