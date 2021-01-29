import React from 'react';
import Listadecategorias from '../Components/Listaecategorias';
import BotaoCarrinho from '../Components/BotaoCarrinho';

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
        <BotaoCarrinho />
        {inputStatus === '' && (
          <div data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </div>
        ) }
        <Listadecategorias />

      </div>
    );
  }
}
