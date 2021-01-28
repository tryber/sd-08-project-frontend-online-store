import React from 'react';

import ListaProdutos from '../Components/ListaProdutos';

export default class PaginaInicial extends React.Component {
  constructor() {
    super();

    this.state = {
      inputStatus: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { value } = target;
    this.setState({
      inputStatus: value,
    });
  }

  render() {
    const { inputStatus } = this.state;
    return (
      <div>
        <input
          type="text"
          id="buscador"
          value={ inputStatus }
          onChange={ this.handleChange }
          data-testid="query-input"
        />
        <ListaProdutos inputStatus={ inputStatus } />
        {inputStatus === '' && (
          <div data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </div>
        ) }

      </div>
    );
  }
}
