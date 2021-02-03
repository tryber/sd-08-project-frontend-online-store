import React from 'react';

class MetodoPagmento extends React.Component {
  render() {
    return (
      <div>
        <fieldset>
          <legend>Método de pagamento</legend>
          <p>Boleto</p>
          <label htmlFor="boleto">
            <input type="radio" valeu="boleto" name="pagamento" checked />
            Boleto
          </label>
          <p>Cartão de Crétido</p>
          <label htmlFor="visa">
            <input type="radio" value="visa" name="pagamento" />
            Visa
          </label>
          <label htmlFor="MasterCard">
            <input type="radio" value="MasterCard" name="pagamento" />
            MasterCard
          </label>
          <label htmlFor="Elo">
            <input type="radio" value="Elo" name="pagamento" />
            Elo
          </label>
        </fieldset>
      </div>
    );
  }
}

export default MetodoPagmento;
