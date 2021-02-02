import React, { Component } from 'react';

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      name: '',
      email: '',
      cpf: '',
      telefone: '',

    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState((beforeState) => ({
      ...beforeState,
      [name]: value,
    }));
  }

  inputName() {
    const { name } = this.state;
    return (
      <label htmlFor="titleInput">
        Nome completo
        <input
          type="text"
          value={ name }
          data-testid="checkout-fullname"
          onChange={ this.handleChange }
          id="inputName"
          name="name"
        />
      </label>
    );
  }

  inputEmail() {
    const { email } = this.state;
    return (
      <label htmlFor="e-mail">
        Email
        <input
          type="text"
          value={ email }
          data-testid="checkout-email"
          onChange={ this.handleChange }
          id="email"
          name="email"
        />
      </label>
    );
  }

  inputCPF() {
    const { CPF } = this.state;
    return (
      <label htmlFor="CPF">
        CPF
        <input
          type="text"
          value={ CPF }
          data-testid="checkout-cpf"
          onChange={ this.handleChange }
          id="cpf"
          name="cpf"
        />
      </label>
    );
  }

  inputNumber() {
    const { telefone } = this.state;
    return (
      <label htmlFor="checkout-phone">
        Telefone
        <input
          type="text"
          data-testid="checkout-phone"
          name="telefone"
          value={ telefone }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  inputCEP() {
    const { CEP } = this.state;
    return (
      <label htmlFor="CEP">
        CEP
        <input
          type="text"
          data-testid="checkout-cep"
          name="telefone"
          value={ CEP }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  inputAddress() {
    const { address } = this.state;
    return (
      <label htmlFor="CEP">
        Endereço
        <input
          type="text"
          data-testid="checkout-address"
          name="endereço"
          value={ address }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  render() {
    return (
      <form>
        { this.inputName() }
        { this.inputEmail() }
        { this.inputCPF() }
        { this.inputNumber() }
        { this.inputCEP() }
        { this.inputAddress() }
      </form>
    );
  }
}

export default Checkout;
