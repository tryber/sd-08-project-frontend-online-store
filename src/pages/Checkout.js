import React from 'react';
import { Link } from 'react-router-dom';
import { totalValue } from '../services/storageFuncs';

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      email: '',
      cpf: '',
      phoneNumber: '',
      cep: '',
      address: '',
      errorMessage: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    this.setState({
      [name]: target.value,
    });
  }

  handleClick(event) {
    const { fullName, email, cpf, phoneNumber, cep, address } = this.state;
    if (
      fullName === '' || email === '' || cpf === '' || phoneNumber === ''
      || cep === '' || address === '') {
      event.preventDefault();
      this.setState({
        errorMessage: 'Todos os campos devem ser preenchidos!',
      });
    }
  }

  productsInfo() {
    const storageProducts = JSON.parse(localStorage.cartItems);
    return (
      <fieldset>
        <legend>Revise seus produtos</legend>
        { storageProducts.map(({ id, quantity, thumbnail, title, price }) => (
          <div key={ id }>
            <span>{ quantity }</span>
            <img src={ thumbnail } alt="imagem produto" />
            <span>{ title }</span>
            <span>
              R$
              { price }
            </span>
          </div>
        )) }
        <span>Total a pagar: R$ </span>
        { totalValue() }
      </fieldset>
    );
  }

  fullName() {
    const { fullName } = this.state;
    return (
      <input
        data-testid="checkout-fullname"
        name="fullName"
        type="text"
        placeholder="Nome Completo"
        value={ fullName }
        onChange={ this.handleChange }
        required="required"
      />
    );
  }

  email() {
    const { email } = this.state;
    return (
      <input
        data-testid="checkout-email"
        name="email"
        type="text"
        placeholder="Email"
        value={ email }
        onChange={ this.handleChange }
        required="required"
      />
    );
  }

  cpf() {
    const { cpf } = this.state;
    return (
      <input
        data-testid="checkout-cpf"
        name="cpf"
        type="text"
        placeholder="CPF"
        value={ cpf }
        onChange={ this.handleChange }
        required="required"
      />
    );
  }

  phoneNumber() {
    const { phoneNumber } = this.state;
    return (
      <input
        data-testid="checkout-phone"
        name="phoneNumber"
        type="text"
        placeholder="Telefone"
        value={ phoneNumber }
        onChange={ this.handleChange }
        required="required"
      />
    );
  }

  cep() {
    const { cep } = this.state;
    return (
      <input
        data-testid="checkout-cep"
        name="cep"
        type="text"
        placeholder="CEP"
        value={ cep }
        onChange={ this.handleChange }
        required="required"
      />
    );
  }

  address() {
    const { address } = this.state;
    return (
      <input
        data-testid="checkout-address"
        name="address"
        type="text"
        placeholder="Endereço Completo"
        value={ address }
        onChange={ this.handleChange }
        required="required"
      />
    );
  }

  payMethod() {
    return (
      <fieldset>
        <legend>Método de pagamento</legend>
        <label htmlFor="boleto">
          <input type="radio" id="boleto" value="bo" name="payment" defaultChecked />
          Boleto
        </label>
        <label htmlFor="visa">
          <input type="radio" id="visa" value="cardVisa" name="payment" />
          Visa
        </label>
        <label htmlFor="mastercard">
          <input type="radio" id="mastercard" value="cardMaster" name="payment" />
          MasterCard
        </label>
        <label htmlFor="elo">
          <input type="radio" id="elo" value="cardElo" name="payment" />
          Elo
        </label>
      </fieldset>
    );
  }

  render() {
    const { errorMessage } = this.state;
    return (
      <div>
        Preencha seus dados
        <form action="">
          { this.productsInfo() }
          { this.fullName() }
          { this.cpf() }
          { this.email() }
          { this.phoneNumber() }
          { this.cep() }
          { this.address() }
          { this.payMethod() }
        </form>
        <span>{ errorMessage }</span>
        <Link to="/">
          <button type="button" onClick={ (event) => this.handleClick(event) }>
            COMPRAR
          </button>
        </Link>
      </div>
    );
  }
}

export default Checkout;
