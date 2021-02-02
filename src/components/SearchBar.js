import React from 'react';
import PropTypes from 'prop-types';

export default class SearchBar extends React.Component {
  render() {
    const { handleChange, handleClick } = this.props;
    return (
      <div className="search-bar-container">
        <section className="search-bar">
          <input
            type="text"
            placeholder="Pesquisa"
            onChange={ handleChange }
            data-testid="query-input"
          />
          <button
            type="button"
            onClick={ handleClick }
            data-testid="query-button"
          >
            Pesquisar

          </button>
        </section>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

SearchBar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};
