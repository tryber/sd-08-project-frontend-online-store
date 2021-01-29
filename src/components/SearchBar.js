import React, { Component } from 'react';
import ListCards from './ListCards';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
    };

    this.QueryList = this.QueryList.bind(this);
    this.listUpdate = this.listUpdate.bind(this);
  }

  listUpdate(newValue) {
    this.setState({ value: newValue });
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <input
          data-testid="query-input"
          type="text"
          onChange={ (event) => this.listUpdate(event.target.value) }
        />
        <button
          type="submit"
          data-testid="query-button"
          onClick={ this.QueryList }
        >
          Buscar
        </button>
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        <ListCards props={ this.state } />
      </div>
    );
  }
}

export default SearchBar;
