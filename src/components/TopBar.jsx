import React, { Component } from 'react';
import Proptypes from 'prop-types';
import './css/SearchBar.css';

class TopBar extends Component {
  render() {
    const { handleClick, handleChange, value } = this.props;
    return (
      <div>
        <h3 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h3>
        <input
          data-testid="query-input"
          type="text"
          className="input"
          placeholder="Digite o produto desejado"
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
      </div>
    );
  }
}

TopBar.propTypes = {
  handleClick: Proptypes.func.isRequired,
  handleChange: Proptypes.func.isRequired,
  value: Proptypes.string.isRequired,
};

export default TopBar;
