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
      <div className="mb-3">
        <label htmlFor="titleInput" className="form-label">
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
      </div>
    );
  }

  inputEmail() {
    const { email } = this.state;
    return (
      <div className="mb-3">
        <div className="mb-3">
          <label htmlFor="e-mail" className="form-label">
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
        </div>
      </div>
    );
  }

  inputCPF() {
    const { CPF } = this.state;
    return (
      <div className="mb-3">
        <label htmlFor="CPF" className="form-label">
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
      </div>
    );
  }

  inputNumber() {
    const { telefone } = this.state;
    return (
      <div className="mb-3">
        <label htmlFor="checkout-phone" className="form-label">
          Telefone
          <input
            type="text"
            data-testid="checkout-phone"
            name="telefone"
            value={ telefone }
            onChange={ this.handleChange }
          />
        </label>
      </div>
    );
  }

  inputCEP() {
    const { CEP } = this.state;
    return (
      <div className="mb-3">
        <label htmlFor="CEP" className="form-label">
          CEP
          <input
            type="text"
            data-testid="checkout-cep"
            name="cep"
            value={ CEP }
            onChange={ this.handleChange }
          />
        </label>
      </div>
    );
  }

  inputAddress() {
    const { address } = this.state;
    return (
      <div className="mb-3">
        <label htmlFor="CEP" className="form-label">
          Endereço
          <input
            type="text"
            data-testid="checkout-address"
            name="endereço"
            value={ address }
            onChange={ this.handleChange }
          />
        </label>
      </div>
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
        <button type="submit">
          <a href="https://www.youtube.com/watch?v=3e14skRuVk0">
            enviar
          </a>
        </button>
      </form>
    );
  }
}

export default Checkout;
