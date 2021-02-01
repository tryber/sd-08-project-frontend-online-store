import React from 'react';
import PropTypes from 'prop-types';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    const { nameProduct, onQueryProduct, onClickRequest } = this.props;
    return (
      <form onSubmit={ this.handleSubmit }>
        <input
          data-testid="query-input"
          type="text"
          value={ nameProduct }
          name="nameProduct"
          onChange={ onQueryProduct }
        />
        <button
          data-testid="query-button"
          type="submit"
          onClick={ onClickRequest }
        >
          Enviar
        </button>
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma
          categoria.
        </h1>
      </form>
    );
  }
}

Search.propTypes = {
  nameProduct: PropTypes.string.isRequired,
  onQueryProduct: PropTypes.func.isRequired,
  onClickRequest: PropTypes.func.isRequired,
};

export default Search;
