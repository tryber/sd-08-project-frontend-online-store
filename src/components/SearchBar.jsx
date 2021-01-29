import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  constructor() {
    super();

    this.InsertSearchBar = this.InsertSearchBar.bind(this);
  }

  InsertSearchBar() {
    const { onClick, onChange } = this.props;
    return (
      <div data-testid="home-initial-message">
        <form onSubmit={ (event) => event.preventDefault() }>
          <input
            type="text"
            data-testid="query-input"
            placeholder="Digite aqui sua pesquisa"
            name="searchText"
            onChange={ onChange }
          />
          <button
            type="button"
            data-testid="query-button"
            onClick={ onClick }
          >
            Pesquisar
          </button>
        </form>
        <h2>Digite algum termo de pesquisa ou escolha uma categoria.</h2>
      </div>
    );
  }

  render() {
    return (
      <div>
        { this.InsertSearchBar() }
      </div>
    );
  }
}

SearchBar.propTypes = {
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchBar;
