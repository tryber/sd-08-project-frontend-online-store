import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';
import { GiMagnifyingGlass } from 'react-icons/gi';

import CartButton from '../CartButton';

import styles from './styles.module.css';

class SearchBar extends Component {
  renderForm() {
    const { handleChange, handleSearch } = this.props;

    return (
      <form
        className={ styles.searchBarForm }
        onSubmit={ (event) => event.preventDefault() }
      >
        <div className={ styles.mainInput }>
          <input
            name="queryInput"
            data-testid="query-input"
            type="text"
            onChange={ handleChange }
            placeholder="Digite o nome do produto que deseja pesquisar"
          />
          <button
            type="button"
            onClick={ handleSearch }
            data-testid="query-button"
            className={ styles.searchButton }
          >
            <IconContext.Provider value={ { className: styles.searchIcon } }>
              <GiMagnifyingGlass />
            </IconContext.Provider>
          </button>
          <CartButton />
        </div>
      </form>
    );
  }

  render() {
    return (
      <div className={ styles.searchBar }>
        { this.renderForm() }
      </div>
    );
  }
}

SearchBar.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
};

export default SearchBar;
