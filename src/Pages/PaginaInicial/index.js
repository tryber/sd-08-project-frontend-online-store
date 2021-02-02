import React, { Component } from 'react';
import ListaDeCategorias from '../../Components/ListaDeCategorias';
import BotaoCarrinho from '../../Components/BotaoCarrinho';
import ListaProdutos from '../../Components/ListaProdutos';

export default class PaginaInicial extends Component {
  constructor() {
    super();

    this.state = {
      inputStatus: '',
      categoryId: '',
    };

    this.changeInputStatus = this.changeInputStatus.bind(this);
    this.changeCategoryId = this.changeCategoryId.bind(this);
  }

  changeCategoryId({ target }) {
    const { value } = target;
    this.setState({
      categoryId: value,
    });
  }

  changeInputStatus({ target }) {
    const { value } = target;
    this.setState({
      inputStatus: value,
    });
  }

  renderStatusInput() {
    const { inputStatus } = this.state;
    return (
      <input
        type="text"
        id="buscador"
        value={ inputStatus }
        onChange={ this.changeInputStatus }
        data-testid="query-input"
      />
    );
  }

  renderInitialMessage() {
    return (
      <div data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </div>
    );
  }

  render() {
    const { inputStatus, categoryId } = this.state;
    return (
      <div>
        {this.renderStatusInput()}
        <ListaProdutos inputStatus={ inputStatus } categoryId={ categoryId } />
        <BotaoCarrinho />
        {(inputStatus === '' && categoryId === '') && this.renderInitialMessage()}
        <ListaDeCategorias onChangeCategoryId={ this.changeCategoryId } />
      </div>
    );
  }
}
