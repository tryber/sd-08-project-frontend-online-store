import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const { text, onClick, onChange } = this.props;
    return (
      <section>
        <label htmlFor="input">
          Search:
          <input
            onChange={ onChange }
            data-testid="query-input"
            type="text"
            name="query"
            value={ text }
          />
        </label>
        <button
          onClick={ onClick }
          type="button"
          data-testid="query-button"
        >
          Button
        </button>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </section>
    );
  }
}

SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default SearchBar;
