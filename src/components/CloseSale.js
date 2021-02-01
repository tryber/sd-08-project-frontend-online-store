import React from 'react';
import { Redirect } from 'react-router-dom';

class CloseSale extends React.Component {
  constructor(props) {
    super(props);
    this.renderFullNameInput = this.renderFullNameInput.bind(this);
    this.renderEmailInput = this.renderEmailInput.bind(this);
    this.renderCPFInput = this.renderCPFInput.bind(this);
    this.renderPhoneInput = this.renderPhoneInput.bind(this);
    this.renderCEPInput = this.renderCEPInput.bind(this);
    this.renderAddressInput = this.renderAddressInput.bind(this);
    this.renderTotal = this.renderTotal.bind(this);
  }

  renderFullNameInput() {
    return (
      <div>
        <input
          placeholder="Nome completo"
          type="text"
          data-testid="checkout-fullname"
          required
        />
      </div>
    );
  }

  renderEmailInput() {
    return (
      <div>
        <input
          placeholder="Nome completo"
          type="email"
          data-testid="checkout-email"
          required
        />
      </div>
    );
  }

  renderCPFInput() {
    return (
      <div>
        <input
          placeholder="CPF"
          type="text"
          maxLength="11"
          data-testid="checkout-cpf"
          required
        />
      </div>
    );
  }

  renderPhoneInput() {
    return (
      <div>
        <input
          placeholder="Telefone"
          type="text"
          minLength="10"
          data-testid="checkout-phone"
          required
        />
      </div>
    );
  }

  renderCEPInput() {
    return (
      <div>
        <input
          placeholder="CEP"
          type="text"
          minLength="8"
          data-testid="checkout-cep"
          required
        />
      </div>
    );
  }

  renderAddressInput() {
    return (
      <div>
        <input
          placeholder="Endereço"
          type="text"
          data-testid="checkout-address"
          required
        />
      </div>
    );
  }

  renderSaleItems() {
    let products = [];
    if ({}.hasOwnProperty.call(sessionStorage, 'products'));
    products = JSON.parse(sessionStorage.getItem('products'));
    return (
      products
        .map((product, index) => (
          <li key={ index }>{`${product.title}: ${product.price}`}</li>)));
  }

  renderTotal() {
    let products = [];
    if ({}.hasOwnProperty.call(sessionStorage, 'products'));
    products = JSON.parse(sessionStorage.getItem('products'));
    const total = products
      .reduce((acc, curr) => {
        acc += parseFloat(curr.price.split(' ')[1]);
        return acc;
      }, 0);
    return (
      `R$${total}`
    );
  }

  render() {
    return (
      <div>
        <form>
          <h1>Resumo da compra:</h1>
          { this.renderSaleItems() }
          <span>
            Total:
            { this.renderTotal() }
          </span>
          <div>
            { this.renderFullNameInput() }
            { this.renderEmailInput() }
            { this.renderCPFInput() }
            { this.renderPhoneInput() }
            { this.renderCEPInput() }
            { this.renderAddressInput() }
          </div>
          <button
            onClick={ () => (<Redirect to="/" />) }
            type="button"
          >
            Finalizar Compra
          </button>
        </form>
      </div>

    );
  }
}
export default CloseSale;
