import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineSearch } from 'react-icons/ai';
import './Search.css';

class Search extends React.Component {
  render() {
    const { onChange, onClickInput } = this.props;
    return (
      <section>
        <form onSubmit={ onChange }>
          <div className="inputDiv">
            <input
              type="search"
              name="input"
              data-testid="query-input"
              onChange={ onChange }
            />
            <button
              type="button"
              onClick={ onClickInput }
              data-testid="query-button"
            >
              Pesquisar
            </button>
            <div className="searchIcon"><AiOutlineSearch /></div>
          </div>
        </form>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </section>
    );
  }
}

Search.propTypes = {
  onChange: PropTypes.func.isRequired,
  onClickInput: PropTypes.func.isRequired,
};

export default Search;
