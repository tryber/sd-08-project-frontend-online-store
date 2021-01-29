import React from 'react';

export default class SerchBar extends React.Component {
  constructor() {
    super();
    this.getValue = this.getValue.bind(this);
  }

  getValue({ target }) {
    this.props.onChange(target.value);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          name="query"
          data-testid="query-input"
          onChange={ this.getValue }
        />
        <button type="button" data-testid="query-button">Pesquisar</button>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}
