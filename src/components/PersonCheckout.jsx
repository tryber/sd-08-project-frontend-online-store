import React from 'react';

class PersonCheckout extends React.Component {
  render() {
    return (
      <form action="">
        <label
          htmlFor="fullname"
        >
          Nome Completo
          <input
            type="text"
            name="fullname"
            id="fullname"
            data-testid="checkout-fullname"
          />
        </label>
        <label
          htmlFor="email"
        >
          Email
          <input type="email" name="email" id="email" data-testid="checkout-email" />
        </label>
        <label
          htmlFor="cpf"
        >
          CPF
          <input type="text" name="cpf" id="cpf" data-testid="checkout-cpf" />
        </label>
        <label
          htmlFor="phone"
        >
          Telefone
          <input type="text" name="phone" id="phone" data-testid="checkout-phone" />
        </label>
      </form>
    );
  }
}

export default PersonCheckout;
