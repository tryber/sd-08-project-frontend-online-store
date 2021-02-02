import React, { Component } from 'react';
import * as localStorage from '../services/apiLocalStorage';
// import PropTypes from 'prop-type';

export default class Payment extends Component {
  constructor() {
    super();
    this.state = {
      cart: localStorage.readCart(),
    };

    this.getFinalPrice = this.getFinalPrice.bind(this);
  }

  getFinalPrice() {
    const { cart } = this.state;
    let finalPrice = 0;
    cart.forEach((element) => {
      finalPrice += element.price * element.qtd;
    });
    return Math.round(finalPrice * 100) / 100;
  }

  creatForm() {
    return (
      <form>
        <label htmlFor="name">
          Nome:
          <input type="text" id="name" data-testid="checkout-fullname" />
        </label>
        <label htmlFor="email">
          email:
          <input type="text" id="email" data-testid="checkout-email" />
        </label>
        <label htmlFor="cpf">
          CPF:
          <input type="text" id="cpf" data-testid="checkout-cpf" />
        </label>
        <label htmlFor="phone">
          Telefone:
          <input type="text" id="phone" data-testid="checkout-phone" />
        </label>
        <label htmlFor="cep">
          CEP:
          <input type="text" id="cep" data-testid="checkout-cep" />
        </label>
        <label htmlFor="end">
          END:
          <input type="text" id="end" data-testid="checkout-address" />
        </label>
        <label htmlFor="pay">
          Selecione a forma de pagamento
          <select>
            <option>Boleto</option>
            <option>Cartão de Crédito</option>
            <option>Cartão de Débito</option>
          </select>
        </label>
        <button type="button">Finalizar Compra</button>
      </form>
    );
  }

  render() {
    const { cart } = this.state;
    return (
      <>
        <ol>
          { cart.map(({ title, qtd, price, id }) => (
            <li
              key={ id }
            >
              {`${title} - ${qtd} - ${price} -`}
            </li>)) }
        </ol>
        <h1>{ `R$ ${this.getFinalPrice()}` }</h1>
        { this.creatForm() }
      </>
    );
  }
}
