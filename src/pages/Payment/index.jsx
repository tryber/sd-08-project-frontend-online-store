import React from 'react';

const inputs = [
  { name: 'fullName', label: 'Nome completo', testid: 'checkout-fullname' },
  { name: 'cpf', label: 'CPF', testid: 'checkout-cpf' },
  { name: 'email', label: 'Email', testid: 'checkout-email' },
  { name: 'telephone', label: 'Telefone', testid: 'checkout-phone' },
  { name: 'postalcode', label: 'CEP', testid: 'checkout-cep' },
  { name: 'address', label: 'Endereço', testid: 'checkout-address' },
  { name: 'complement', label: 'Complemento', testid: 'checkout-complement' },
  { name: 'number', label: 'Número', testid: 'checkout-number' },
  { name: 'city', label: 'Cidade', testid: 'checkout-city' },
  { name: 'state', label: 'Estado', testid: 'checkout-state' },
];

class Payment extends React.Component {
  constructor() {
    super();
    this.state = {
      billet: true,
      visa: false,
      mastercard: false,
      elo: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: name === 'postalcode' ? Number(value) : value,
    });
  }

  inputBillet() {
    const { billet } = this.state;
    return (
      <label htmlFor="checkout-billet">
        Boleto
        <input
          id="checkout-billet"
          type="radio"
          name="payment"
          onChange={ this.handleChange }
          value={ billet }
          checked
        />
      </label>
    );
  }

  inputCreditCard() {
    const { visa, mastercard, elo } = this.state;
    return (
      <div>
        <legend>Cartão de Crédito</legend>
        <label htmlFor="checkout-credit-visa">
          Visa
          <input
            id="checkout-credit-visa"
            type="radio"
            name="payment"
            onChange={ this.handleChange }
            value={ visa }
          />
        </label>
        <label htmlFor="checkout-credit-mastercard">
          MasterCard
          <input
            id="checkout-credit-mastercard"
            type="radio"
            name="payment"
            onChange={ this.handleChange }
            value={ mastercard }
          />
        </label>
        <label htmlFor="checkout-credit-elo">
          Elo
          <input
            id="checkout-credit-elo"
            type="radio"
            name="payment"
            onChange={ this.handleEvent }
            value={ elo }
          />
        </label>
      </div>
    );
  }

  renderInput() {
    return (
      <>
        { inputs.map(({ name, label, testid }) => (
          <label key={ name } htmlFor={ name }>
            { label }
            <input
              data-testid={ testid }
              type="text"
              name={ name }
              onChange={ this.handleChange }
              required
            />
          </label>))}
      </>
    );
  }

  render() {
    return (
      <>
        <fieldset>
          <section>
            <h4>Revise seus Produtos</h4>
            <p>Produto 1 R$ XXX,XX</p>
            <p>Produto N R$ XXX,XX</p>
            <h4>Total: R$ XXX,XX</h4>
          </section>
        </fieldset>
        <fieldset>
          <form className="form">
            <legend>Informações do Comprador</legend>
            { this.renderInput() }
          </form>
        </fieldset>
        <fieldset>
          <section>
            <h4>Método de pagamento</h4>
            {this.inputBillet()}
            {this.inputCreditCard()}
          </section>
        </fieldset>
        <button type="button"> Comprar </button>
      </>
    );
  }
}

export default Payment;
