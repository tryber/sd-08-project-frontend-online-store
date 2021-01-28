import React from 'react';
// import PropTypes from 'prop-types';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <input
          type="text"
          name="query"
          data-testid="query-input"
        />
        <button type="button">Pesquisar</button>
        <span data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria
        </span>
      </header>
    );
  }
}
