import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    const { nameProdut, onQueryProduct, onClickRequest } = this.props;
    return (
      <form onSubmit={ this.handleSubmit }>
        <input
          data-testid="query-input"
          type="text"
          value={ nameProdut }
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

export default Search;
