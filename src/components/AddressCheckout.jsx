import React from 'react';

class AdressCheckout extends React.Component {
  render() {
    return (
      <div data-testid="checkout-products">
        <p>Check Out</p>
        <form>

          <label
            htmlFor="cep"
          >
            CEP
            <input type="text" name="cep" id="cep" data-testid="checkout-cep" />
          </label>
          <label
            htmlFor="address"
          >
            Endereço
            <input
              type="text"
              name="address"
              id="address"
              data-testid="checkout-address"
            />
          </label>
        </form>
      </div>
    );
  }
}

export default AdressCheckout;
