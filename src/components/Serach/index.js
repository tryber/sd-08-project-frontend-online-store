import React, { Component } from 'react';
import './Search.css';
import PropTypes from 'prop-types';

class Search extends Component {
  render() {
    const { buscaInput, submitBotao } = this.props;
    return (
      <div className="search">
        <label htmlFor="search" data-testid="home-initial-message">
          <p>
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
          <input
            data-testid="query-input"
            className="search-input"
            id="search"
            name="search"
            onChange={ buscaInput }
            placeholder="Faça uma Busca Por Produtos"
          />
          <button
            type="button"
            data-testid="query-button"
            onClick={ submitBotao }
          >
            Pesquisar
          </button>
        </label>
      </div>
    );
  }
}

Search.propTypes = {
  buscaInput: PropTypes.func.isRequired,
  submitBotao: PropTypes.func.isRequired,
};
export default Search;
