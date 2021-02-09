import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  constructor() {
    super();

    this.InsertSearchBar = this.InsertSearchBar.bind(this);
    this.inspectInput = this.inspectInput.bind(this);
  }

  inspectInput() {
    const { searchText } = this.props;
    if (searchText === '') {
      return (
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>);
    }
  }

  InsertSearchBar() {
    const { onClick, onChange } = this.props;
    return (
      <div>
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
      </div>
    );
  }

  render() {
    return (
      <div>
        { this.inspectInput() }
        { this.InsertSearchBar() }
      </div>
    );
  }
}

SearchBar.propTypes = {
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
};

export default SearchBar;
