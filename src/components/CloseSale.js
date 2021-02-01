import React from 'react';
import Redirect from 'react-router-dom';

class CloseSale extends React.Component {
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
          type="number"
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
          type="number"
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
          type="number"
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

  render() {
    return (
      <div>
        <form>
          <div>
            { this.renderFullName() }
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
