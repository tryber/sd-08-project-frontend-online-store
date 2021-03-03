import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import FormaDePagamento from './FormaDePagamento';

export default class FinalizarCompra extends Component {
  constructor() {
    super();
    this.state = {
      nome: '',
      cpf: '',
      email: '',
      cep: '',
      endereco: '',
      complemento: '',
      numero: '',
      estado: '',
      cidade: '',
      telefone: '',
      pagamento: '',
      redirect: false,

    };

    this.handleChange = this.handleChange.bind(this);
    this.finalizarCompraBtn = this.finalizarCompraBtn.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  finalizarCompraBtn() {
    const { nome, cpf, email,
      cep, numero, cidade, estado,
      telefone, complemento, endereco, pagamento } = this.state;
    const arrayGeral = [nome, cpf, email, cidade, estado,
      telefone, complemento, numero, cep, endereco, pagamento];
    const checkArray = arrayGeral.every((item) => item !== '');
    if (checkArray) this.setState({ redirect: true });
  }

  renderInfoCompradorAux() {
    const { numero, cidade, estado, telefone } = this.state;
    return (
      <>
        <label htmlFor="numero">
          <input
            onChange={ this.handleChange }
            value={ numero }
            type="text"
            name="numero"
            id="numero"
            placeholder="Número"
          />
        </label>
        <label htmlFor="cidade">
          <input
            onChange={ this.handleChange }
            value={ cidade }
            type="text"
            name="cidade"
            id="cidade"
            placeholder="Cidade"
          />
        </label>
        <label htmlFor="estado">
          <input
            onChange={ this.handleChange }
            value={ estado }
            type="text"
            name="estado"
            id="estado"
            placeholder="Estado"
          />
        </label>
        <label htmlFor="telefone">
          <input
            data-testid="checkout-phone"
            onChange={ this.handleChange }
            value={ telefone }
            type="text"
            name="telefone"
            id="telefone"
            placeholder="Telefone"
          />
        </label>
        {this.renderInfoCompradorAuxAux()}
      </>
    );
  }

  renderInfoCompradorAuxAux() {
    const { endereco, complemento } = this.state;
    return (
      <>
        <label htmlFor="endereco">
          <input
            data-testid="checkout-address"
            onChange={ this.handleChange }
            value={ endereco }
            type="text"
            name="endereco"
            id="endereco"
            placeholder="Endereço"
          />
        </label>
        <label htmlFor="complemento">
          <input
            onChange={ this.handleChange }
            value={ complemento }
            type="text"
            name="complemento"
            id="complemento"
            placeholder="Complemento"
          />
        </label>
      </>
    );
  }

  renderCepComprador() {
    const { cep } = this.state;
    return (
      <label htmlFor="cep">
        <input
          onChange={ this.handleChange }
          value={ cep }
          type="text"
          name="cep"
          id="cep"
          data-testid="checkout-cep"
          placeholder="CEP"
        />
      </label>
    );
  }

  renderInfoComprador() {
    const { nome, cpf, email } = this.state;
    return (
      <section>
        Informações do comprador:
        <label htmlFor="nome">
          <input
            data-testid="checkout-fullname"
            onChange={ this.handleChange }
            value={ nome }
            type="text"
            name="nome"
            id="nome"
            placeholder="Nome Completo"
          />
        </label>
        <label htmlFor="cpf">
          <input
            data-testid="checkout-cpf"
            onChange={ this.handleChange }
            value={ cpf }
            type="text"
            name="cpf"
            id="cpf"
            placeholder="CPF"
          />
        </label>
        <label htmlFor="email">
          <input
            data-testid="checkout-email"
            onChange={ this.handleChange }
            value={ email }
            type="email"
            name="email"
            id="email"
            placeholder="E-mail"
          />
        </label>
        {this.renderCepComprador()}
        {this.renderInfoCompradorAux()}

      </section>
    );
  }

  renderTotalCarrinho({ carrinho }) {
    const total = carrinho.reduce((acc, curr) => {
      const value = curr.price * curr.contador;
      return acc + value;
    }, 0);

    return total;
  }

  render() {
    const { carrinho } = this.props;
    const { redirect } = this.state;
    const produtos = carrinho.carrinho;
    if (redirect) return (<Redirect to="/" />);
    return (
      <div>
        <section>
          Revise seus produtos:
          {produtos && produtos.map((produto, index) => (
            <div key={ index }>
              <img src={ produto.thumbnail } alt="produto" />
              Produto:
              {produto.price}
            </div>
          ))}
          <span>
            Total
            {produtos && this.renderTotalCarrinho(carrinho)}
          </span>
        </section>
        {this.renderInfoComprador()}
        <FormaDePagamento handleChange={ this.handleChange } />
        <button type="button" onClick={ this.finalizarCompraBtn }>Comprar</button>
      </div>
    );
  }
}

FinalizarCompra.propTypes = {
  carrinho: PropTypes.objectOf(PropTypes.array).isRequired,
};
