import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Checkout extends React.Component {
  constructor() {
    super();

    this.sumProducts = this.sumProducts.bind(this);
    this.formFullname = this.formFullname.bind(this);
    this.formEmail = this.formEmail.bind(this);
    this.formCpf = this.formCpf.bind(this);
    this.formPhone = this.formPhone.bind(this);
    this.formCep = this.formCep.bind(this);
    this.formAddress = this.formAddress.bind(this);
  }

  sumProducts() {
    const { location: { state } } = this.props;
    const stateCart = Object.values(state);
    let sum = 0;
    stateCart.map((element) => {
      sum += element[0] * JSON.parse(element[1]).price;
      return sum;
    });
    return sum;
  }

  formFullname() {
    return (
      <label htmlFor="checkout-fullname">
        <input
          id="checkout-fullname"
          data-testid="checkout-fullname"
          type="text"
          placeholder="Nome Completo"
        />
      </label>
    );
  }

  formEmail() {
    return (
      <label htmlFor="checkout-email">
        <input
          id="checkout-email"
          data-testid="checkout-email"
          type="text"
          placeholder="Email"
        />
      </label>
    );
  }

  formCpf() {
    return (
      <label htmlFor="checkout-cpf">
        <input
          id="checkout-cpf"
          data-testid="checkout-cpf"
          type="text"
          placeholder="CPF"
        />
      </label>
    );
  }

  formPhone() {
    return (
      <label htmlFor="checkout-phone">
        <input
          id="checkout-phone"
          data-testid="checkout-phone"
          type="text"
          placeholder="Telefone"
        />
      </label>
    );
  }

  formCep() {
    return (
      <label htmlFor="checkout-cep">
        <input
          id="checkout-cep"
          data-testid="checkout-cep"
          type="text"
          placeholder="CEP"
        />
      </label>
    );
  }

  formAddress() {
    return (
      <label htmlFor="checkout-address">
        <input
          id="checkout-address"
          data-testid="checkout-address"
          type="text"
          placeholder="Endereço Completo"
        />
      </label>
    );
  }

  paymentMethod() {
    return (
      <form action="">
        Método de Pagamento
        <div>
          Boleto
          <input type="radio" name="credt-card" value="boleto" />
        </div>
        <div>
          Cartão de crédito
          <div>
            <input type="radio" name="credt-card" value="mastercard" />
            Mastercard
            <input type="radio" name="credt-card" value="visa" />
            Visa
            <input type="radio" name="credt-card" value="other" />
            Other
          </div>
        </div>
      </form>
    );
  }

  clicked() {
    localStorage.clear();
  }

  render() {
    const { location: { state } } = this.props;
    const stateCart = Object.values(state);
    return (
      <div>
        Reveja seus produtos
        { stateCart.map((cartProduct) => (
          <div key={ cartProduct[1] }>
            <span>{ cartProduct[0] }</span>
            <img
              src={ JSON.parse(cartProduct[1]).thumbnail }
              alt={ JSON.parse(cartProduct[1]).id }
            />
            <span>{ JSON.parse(cartProduct[1]).title }</span>
            <span>{ JSON.parse(cartProduct[1]).price }</span>
          </div>
        ))}
        <div>
          { 'Valor Total: R$ ' }
          <span>{ this.sumProducts() }</span>
        </div>
        <div>
          <div>
            Preencha seus dados
          </div>
          <form action="">
            { this.formFullname() }
            { this.formCpf() }
            { this.formEmail() }
            { this.formPhone() }
            { this.formCep() }
            { this.formAddress() }
          </form>
          { this.paymentMethod() }
        </div>
        <Link to="/" onClick={ this.clicked }>Comprar</Link>
      </div>
    );
  }
}

Checkout.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.objectOf.isRequired,
  }).isRequired,
};

export default Checkout;
