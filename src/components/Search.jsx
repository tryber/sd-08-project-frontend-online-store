import React from 'react';
import PropTypes from 'prop-types';

class Search extends React.Component {
  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    const { queryProduct, handleChange, requestApi } = this.props;
    return (
      <form onSubmit={ this.handleSubmit }>
        <input
          data-testid="query-input"
          name="queryProduct"
          onChange={ handleChange }
          type="text"
          value={ queryProduct }
        />
        <button
          data-testid="query-button"
          onClick={ requestApi }
          type="submit"
        >
          Enviar
        </button>
      </form>
    );
  }
}

Search.propTypes = {
  queryProduct: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  requestApi: PropTypes.func.isRequired,
};

export default Search;
