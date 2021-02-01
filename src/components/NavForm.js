import React from 'react';
import PropTypes from 'prop-types';

class NavForm extends React.Component {
  render() {
    const { handleChange, handleClick } = this.props;
    return (
      <form>
        <label htmlFor="busca" data-testid="home-initial-message" className="s-bar">
          <div className="search-container">
            <button
              className="query-button square-17px"
              data-testid="query-button"
              type="submit"
              onClick={ handleClick }
            >
              <i className="material-icons md-32">search</i>
            </button>
            <input
              type="text"
              name="query"
              onChange={ handleChange }
              id="busca"
              data-testid="query-input"
              className="search-input"
            />
          </div>
          Digite algum termo de pesquisa ou escolha uma categoria.
        </label>
      </form>
    );
  }
}

NavForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default NavForm;
