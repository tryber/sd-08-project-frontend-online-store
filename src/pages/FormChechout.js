import React from 'react';
import { Link } from 'react-router-dom';
import { getTotalValue } from '../services/storage';

class FormChechout extends React.Component {
  constructor() {
    super();
    this.state = {
      fullName: '',
      email: '',
      cpfId: '',
      phone: '',
      cepId: '',
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
    const { fullName, email, cpfId, phone, cepId, address } = this.state;
    if (
      fullName === '' || email === '' || cpfId === '' || phone === ''
      || cepId === '' || address === '') {
      event.preventDefault();
      this.setState({
        errorMessage: 'Todos os campos devem ser preenchidos!',
      });
    }
  }

  renderInfoProducts() {
    const produtos = JSON.parse(localStorage.getItem('cart'));
    const round = 2;
    return (
      <fieldset>
        <legend>Revise seus produtos</legend>
        { produtos.map(({ id, amount, thumbnail, title, price }) => (
          <div key={ id }>
            { amount }
          &nbsp;
            <img src={ thumbnail } alt="imagem produto" />
          &nbsp;
            { title }
            &nbsp;
            R$
            { price }
          &nbsp;
            <br />
          </div>
        )) }
        <br />
        <span>Total a pagar: R$ </span>
        { getTotalValue().toFixed(round) }
      </fieldset>

    );
  }

  renderInfoClientPersonal() {
    const {
      fullName, email, cpfId,
    } = this.state;

    return (
      <fieldset>
        <legend>Informações do comprador</legend>
        <input
          type="text"
          name="fullName"
          data-testid="checkout-fullname"
          placeholder="Nome Completo"
          value={ fullName }
          onChange={ this.handleChange }
          required="required"
        />
        <input
          type="text"
          name="email"
          data-testid="checkout-email"
          placeholder="Email:exemplo@exem.com"
          value={ email }
          onChange={ this.handleChange }
        />
        <input
          type="text"
          name="cpfId"
          data-testid="checkout-cpf"
          placeholder="CPF"
          value={ cpfId }
          onChange={ this.handleChange }
        />

      </fieldset>
    );
  }

  renderInfoClientCity() {
    const {
      phone, cepId, address,
    } = this.state;

    return (
      <>
        <input
          type="text"
          name="phone"
          data-testid="checkout-phone"
          placeholder="Telefone (XX) XXXX-XXXX"
          value={ phone }
          onChange={ this.handleChange }
        />
        <input
          type="text"
          name="cepId"
          data-testid="checkout-cep"
          placeholder="CEP"
          value={ cepId }
          onChange={ this.handleChange }
        />
        <input
          type="text"
          name="address"
          data-testid="checkout-address"
          placeholder="Endereço"
          value={ address }
          onChange={ this.handleChange }
        />
      </>
    );
  }

  renderMethodPay() {
    return (
      <fieldset>
        <legend>Método de pagamento</legend>
        <label htmlFor="boleto">
          <input type="radio" id="boleto" value="bo" name="payment" checked />
          Boleto
        </label>
      &nbsp;
        <label htmlFor="visa">
          <input type="radio" id="visa" value="cardVisa" name="payment" />
          Visa
        </label>
      &nbsp;
        <label htmlFor="mastercard">
          <input type="radio" id="mastercard" value="cardMaster" name="payment" />
          MasterCard
        </label>
      &nbsp;
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
        <h1>MLB - Compra 100% segura</h1>
        <br />
        <form>
          {this.renderInfoProducts()}
          <br />
          {this.renderInfoClientPersonal()}
          {this.renderInfoClientCity()}

          <br />
          {this.renderMethodPay()}
        </form>

        <br />
        <div>{ errorMessage }</div>
        <br />

        <Link to="/">
          <button type="button" onClick={ (event) => this.handleClick(event) }>
            COMPRAR
          </button>
        </Link>
      </div>
    );
  }
}

export default FormChechout;
