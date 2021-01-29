import React from 'react';
import PropTypes from 'prop-types';

class NavBar extends React.Component {
  render() {
    const { handleChange, handleClick } = this.props;
    return (
      <label htmlFor="busca" data-testid="home-initial-message" className="s-bar">
        <div>
          <input
            type="text"
            name="query"
            onChange={ handleChange }
            id="busca"
            data-testid="query-input"
          />
          <button
            className="query-button"
            data-testid="query-button"
            type="button"
            onClick={ handleClick }
          >
            Pesquisar
          </button>
        </div>
        Digite algum termo de pesquisa ou escolha uma categoria.
      </label>
    );
  }
}

NavBar.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default NavBar;
