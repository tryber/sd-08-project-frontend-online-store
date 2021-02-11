import React, { Component } from 'react';
import ProdutosCarrinho from '../../Components/ProdutosCarrinho';

export default class Checkout extends Component {
  constructor() {
    super();
    this.inputChange = this.inputChange.bind(this);
    this.state = {
      fullname: '',
      email: '',
      cpf: '',
      phone: '',
      cep: '',
      address: '',
    };
  }

  inputChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  fullnameInput() {
    const { fullname } = this.state;
    return (
      <input
        name="fullname"
        type="text"
        value={ fullname }
        placeholder="Nome Completo"
        onChange={ this.inputChange }
        data-testid="checkout-fullname"
        className="inputCheckout"

      />
    );
  }

  emailInput() {
    const { email } = this.state;
    return (
      <input
        name="email"
        type="text"
        value={ email }
        placeholder="Email"
        onChange={ this.inputChange }
        data-testid="checkout-email"
        className="inputCheckout"
      />
    );
  }

  cepInput() {
    const { cep } = this.state;
    return (
      <input
        name="cep"
        type="text"
        value={ cep }
        placeholder="CEP"
        onChange={ this.inputChange }
        data-testid="checkout-cep"
        className="inputCheckout"
      />
    );
  }

  phoneInput() {
    const { phone } = this.state;
    return (
      <input
        name="phone"
        type="text"
        value={ phone }
        placeholder="Telefone"
        onChange={ this.inputChange }
        data-testid="checkout-phone"
        className="inputCheckout"
      />
    );
  }

  cpfInput() {
    const { cpf } = this.state;
    return (
      <input
        name="cpf"
        type="text"
        value={ cpf }
        placeholder="CPF"
        onChange={ this.inputChange }
        data-testid="checkout-cpf"
        className="inputCheckout"
      />
    );
  }

  addressInput() {
    const { address } = this.state;
    return (
      <input
        name="address"
        type="text"
        value={ address }
        placeholder="Endereço"
        onChange={ this.inputChange }
        data-testid="checkout-address"
        className="inputCheckout"
      />
    );
  }

  renderForm() {
    return (
      <form>
        <legend>Informações do Comprador:</legend>
        {this.fullnameInput()}
        {this.emailInput()}
        {this.cpfInput()}
        {this.phoneInput()}
        {this.cepInput()}
        {this.addressInput()}
      </form>
    );
  }

  render() {
    return (
      <>
        <ProdutosCarrinho />
        {this.renderForm()}
        <button type="button">FINALIZAR</button>
      </>
    );
  }
}
