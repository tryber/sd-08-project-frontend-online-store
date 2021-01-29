import React, { Component } from 'react';
import Proptypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const { handleClick, handleChange } = this.props;
    return (
      <div>
        <input
          data-testid="query-input"
          type="text"
          className="input"
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
};

export default SearchBar;
