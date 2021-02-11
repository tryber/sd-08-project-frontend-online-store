import React from 'react';
import PropTypes from 'prop-types';

class NavForm extends React.Component {
  render() {
    const { handleChange, handleClick } = this.props;
    return (

      <form className="d-flex flex-nowrap">
        <span data-testid="home-initial-message" className="color-white d-none">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </span>
        <label className="input-group mb-0 flex-nowrap" htmlFor="busca">
          <input
            type="text"
            className="form-control rounded"
            placeholder="Search Product"
            aria-label="Search"
            aria-describedby="basic-addon2"
            name="query"
            onChange={ handleChange }
            id="busca"
            data-testid="query-input"
          />
          <button
            className="query-button"
            type="submit"
            data-testid="query-button"
            onClick={ handleClick }
          >
            <i className="fas fa-search ml-2 color-white" />
          </button>
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
