import React from 'react';
import Listadecategorias from '../Components/Listaecategorias';
import BotaoCarrinho from '../Components/BotaoCarrinho';

export default class PaginaInicial extends React.Component {
  constructor() {
    super();

    this.state = {
      inputStatus: '',
    };
  }

  render() {
    const { inputStatus } = this.state;
    return (
      <div>
        <input
          type="text"
          id="buscador"
          value={ inputStatus }
          // onChange={}
        />
        <BotaoCarrinho />
        {inputStatus === '' && (
          <div data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </div>
        )}
        <Listadecategorias />

      </div>
    );
  }
}
