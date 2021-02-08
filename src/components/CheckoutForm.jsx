import React from 'react';
import PropTypes, { string, func } from 'prop-types';
import RenderStatesForm from './RenderStatesForm';
import BtnCheckout from './BtnCheckout';

class CheckoutForm extends React.Component {
  onSubmit(event) {
    event.preventDefault();
  }

  renderInputName(valueInput, handleChange) {
    return (
      <div className="name-content">
        <input
          className="name-client"
          data-testid="checkout-fullname"
          minLength="20"
          maxLength="50"
          name="nameClient"
          onChange={ handleChange }
          placeholder="Nome completo"
          required
          type="text"
          value={ valueInput }
        />
      </div>
    );
  }

  renderInputEmail(valueInput, handleChange) {
    return (
      <div className="email-content">
        <input
          className="email-client"
          data-testid="checkout-email"
          minLength="10"
          maxLength="70"
          name="emailClient"
          onChange={ handleChange }
          placeholder="Email"
          required
          type="email"
          value={ valueInput }
        />
      </div>
    );
  }

  renderInputCpf(valueInput, handleChange) {
    return (
      <div className="cpf-content">
        <input
          className="cpf-client"
          data-testid="checkout-cpf"
          minLength="13"
          maxLength="17"
          name="cpfClient"
          onChange={ handleChange }
          placeholder="CPF"
          required
          type="text"
          value={ valueInput }
        />
      </div>
    );
  }

  renderInputPhone(valueInput, handleChange) {
    return (
      <div className="phone-content">
        <input
          className="phone-client"
          data-testid="checkout-phone"
          minLength="15"
          maxLength="19"
          name="phoneClient"
          onChange={ handleChange }
          placeholder="Telefone"
          required
          type="text"
          value={ valueInput }
        />
      </div>
    );
  }

  renderInputCep(valueInput, handleChange) {
    return (
      <div className="cep-content">
        <input
          className="cep-client"
          data-testid="checkout-cep"
          minLength="10"
          maxLength="17"
          name="cepClient"
          onChange={ handleChange }
          placeholder="CEP"
          required
          type="text"
          value={ valueInput }
        />
      </div>
    );
  }

  renderInputAddress(valueInput, handleChange) {
    return (
      <div className="address-content">
        <input
          className="address-client"
          data-testid="checkout-address"
          minLength="20"
          maxLength="50"
          name="addressClient"
          onChange={ handleChange }
          placeholder="Endereço"
          required
          type="text"
          value={ valueInput }
        />
      </div>
    );
  }

  renderInputComplement(valueInput, handleChange) {
    return (
      <div className="complement-content">
        <input
          className="complement-client"
          maxLength="50"
          name="complementClient"
          onChange={ handleChange }
          placeholder="Complemento"
          type="text"
          value={ valueInput }
        />
      </div>
    );
  }

  renderInputAddressNumber(valueInput, handleChange) {
    return (
      <div className="address-number-content">
        <input
          className="address-number-client"
          minLength="20"
          maxLength="50"
          name="numberAddressClient"
          onChange={ handleChange }
          placeholder="Número"
          required
          type="text"
          value={ valueInput }
        />
      </div>
    );
  }

  renderInputAddressCity(valueInput, handleChange) {
    return (
      <div className="address-city-content">
        <input
          className="address-city-client"
          minLength="4"
          maxLength="30"
          name="cityClient"
          onChange={ handleChange }
          placeholder="Cidade"
          pattern="[A-Za-z]"
          required
          type="text"
          value={ valueInput }
        />
      </div>
    );
  }

  render() {
    const { handleChange, client } = this.props;
    const {
      nameClient,
      cpfClient,
      emailClient,
      phoneClient,
      cepClient,
      addressClient,
      complementClient,
      numberAddressClient,
      cityClient,
      stateClient,
    } = client;
    return (
      <div>
        <div>
          <h2>Informações do Comprador</h2>
        </div>
        <form onSubmit={ this.onSubmit }>
          { this.renderInputName(nameClient, handleChange) }
          { this.renderInputEmail(emailClient, handleChange) }
          { this.renderInputCpf(cpfClient, handleChange) }
          { this.renderInputPhone(phoneClient, handleChange)}
          { this.renderInputCep(cepClient, handleChange)}
          { this.renderInputAddress(addressClient, handleChange)}
          { this.renderInputComplement(complementClient, handleChange)}
          { this.renderInputAddressNumber(numberAddressClient, handleChange)}
          { this.renderInputAddressCity(cityClient, handleChange)}
          <RenderStatesForm stateClient={ stateClient } handleChange={ handleChange } />
          <BtnCheckout />
        </form>
      </div>
    );
  }
}

CheckoutForm.propTypes = {
  client: PropTypes.shape({
    nameClient: string.isRequired,
    cpfClient: string.isRequired,
    emailClient: string.isRequired,
    phoneClient: string.isRequired,
    cepClient: string.isRequired,
    addressClient: string.isRequired,
    complementClient: string.isRequired,
    numberAddressClient: string.isRequired,
    cityClient: string.isRequired,
    stateClient: string.isRequired,
  }).isRequired,
  handleChange: func.isRequired,
};

// CheckoutForm.defaultProps = {
//   client: '',
// };

export default CheckoutForm;
