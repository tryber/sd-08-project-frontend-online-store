import React from 'react';
import propTypes from 'prop-types';

class InputSearch extends React.Component {
  render() {
    const { query, onChange, onClick } = this.props;
    return (
      <header>
        <input
          name="query"
          type="text"
          data-testid="query-input"
          id="search-input"
          value={ query }
          onChange={ onChange }
        />

        <button
          type="button"
          onClick={ onClick }
          data-testid="query-button"
        >
          Pesquisar
        </button>
      </header>
    );
  }
}

export default InputSearch;

InputSearch.propTypes = {
  query: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  onClick: propTypes.func.isRequired,
};
