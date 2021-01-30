import React from 'react';
import PropTypes from 'prop-types';

class Search extends React.Component {
  render() {
    const { onChange, onClickInput } = this.props;
    return (
      <section>
        <form onSubmit={ onChange }>
          <input
            type="search"
            name="input"
            data-testid="query-input"
            placeholder="Digite algum termo de pesquisa ou escolha uma categoria"
            onChange={ onChange }
          />
          <button
            type="button"
            data-testid="query-button"
            onClick={ onClickInput }
          >
            Pesquisar
          </button>
        </form>
        {/* <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>  creio que fica melhor no placeholder */}
      </section>
    );
  }
}

Search.propTypes = {
  onChange: PropTypes.func.isRequired,
  onClickInput: PropTypes.func.isRequired,
};

export default Search;
