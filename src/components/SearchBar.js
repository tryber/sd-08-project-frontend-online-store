import React from 'react';

export default class SerchBar extends React.Component {
  render() {
    return (
      <div>
        <input
          type="text"
          name="query"
          data-testid="query-input"
        />
        <button type="button">Pesquisar</button>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}
