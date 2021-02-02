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
      <FormGroup>
        <Label htmlFor="titleInput">
          Nome completo
          <Input
            type="text"
            value={ name }
            data-testid="checkout-fullname"
            onChange={ this.handleChange }
            id="inputName"
            name="name"
          />
        </Label>
      </FormGroup>
    );
  }

  inputEmail() {
    const { email } = this.state;
    return (
      <FormGroup>
        <Label htmlFor="e-mail">
          Email
          <Input
            type="text"
            value={ email }
            data-testid="checkout-email"
            onChange={ this.handleChange }
            id="email"
            name="email"
          />
        </Label>
      </FormGroup>
    );
  }

  inputCPF() {
    const { CPF } = this.state;
    return (
      <FormGroup>
        <Label htmlFor="CPF">
          CPF
          <Input
            type="text"
            value={ CPF }
            data-testid="checkout-cpf"
            onChange={ this.handleChange }
            id="cpf"
            name="cpf"
          />
        </Label>
      </FormGroup>
    );
  }

  inputNumber() {
    const { telefone } = this.state;
    return (
      <FormGroup>
        <Label htmlFor="checkout-phone">
          Telefone
          <Input
            type="text"
            data-testid="checkout-phone"
            name="telefone"
            value={ telefone }
            onChange={ this.handleChange }
          />
        </Label>
      </FormGroup>
    );
  }

  inputCEP() {
    const { CEP } = this.state;
    return (
      <FormGroup>
        <Label htmlFor="CEP">
          CEP
          <Input
            type="text"
            data-testid="checkout-cep"
            name="cep"
            value={ CEP }
            onChange={ this.handleChange }
          />
        </Label>
      </FormGroup>
    );
  }

  inputAddress() {
    const { address } = this.state;

    return (
      <FormGroup>
        <Label htmlFor="CEP">
          Endereço
          <Input
            type="text"
            data-testid="checkout-address"
            name="endereço"
            value={ address }
            onChange={ this.handleChange }
          />
        </Label>
      </FormGroup>
    );
  }

  render() {
    return (
      <Form>
        { this.inputName() }
        { this.inputEmail() }
        { this.inputCPF() }
        { this.inputNumber() }
        { this.inputCEP() }
        { this.inputAddress() }
        <Button href="https://www.youtube.com/watch?v=3e14skRuVk0">Finalizar a Compra</Button>
      </Form>

    );
  }
}

export default Checkout;
