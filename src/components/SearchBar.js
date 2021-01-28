import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const { onChange, onClick } = this.props;
    return (
      <div>
        <form onSubmit={ (event) => event.preventDefault() }>
          <label htmlFor="query-input">
            Pesquisa: &nbsp;
            <input
              id="query-input"
              name="query-input"
              data-testid="query-input"
              type="text"
              onChange={ onChange }
            />
          </label>
          <button
            type="submit"
            data-testid="query-button"
            onClick={ onClick }
          >
            Enviar
          </button>
        </form>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SearchBar;
