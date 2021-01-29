import React from 'react';

import { localStorageSave } from '../localStorage';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { value } = this.state;
    localStorageSave('nameProduct', value);
  }

  render() {
    const { value } = this.state;
    return (
      <form onSubmit={ this.handleSubmit }>
        <input
          data-testid="query-input"
          type="text"
          value={ value }
          onChange={ this.handleChange }
        />
        <button data-testid="query-button" type="submit">Enviar</button>
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma
          categoria.
        </h1>
      </form>
    );
  }
}

export default Search;
