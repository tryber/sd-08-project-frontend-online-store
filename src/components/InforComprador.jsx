import React from 'react';
import { estado } from '../services/estado';

class InforComprador extends React.Component {
  render() {
    return (
      <div>
        <fieldset>
          <legend>Informações do Comprador</legend>
          <form>
            <input
              type="text"
              placeholder="Nome Completo"
              data-testId="checkout-fullname"
            />
            <input
              type="text"
              placeholder="CPF"
              data-testId="checkout-cpf"
            />
            <input
              type="text"
              placeholder="Email"
              data-testId="checkout-email"
            />
            <input
              type="text"
              placeholder="Telefone"
              data-testId="checkout-phone"
            />
            <input
              type="text"
              placeholder="CEP"
              data-testId="checkout-cep"
            />
            <input
              type="text"
              placeholder="Endereço"
              data-testId="checkout-address"
            />
            <input type="text" placeholder="Complemento" />
            <input type="text" placeholder="Endereço" />
            <input type="text" placeholder="Número" />
            <select>
              { estado.map((arry, i) => (
                <option key={ i }>{ arry }</option>
              ))}
            </select>
          </form>
        </fieldset>
      </div>
    );
  }
}

export default InforComprador;
