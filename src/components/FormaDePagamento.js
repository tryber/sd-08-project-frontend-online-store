import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FormaDePagamento extends Component {
  render() {
    const { handleChange } = this.props;
    return (
      <section>
        Metodo de Pagamento
        <div>
          <label htmlFor="boleto">
            <input
              onChange={ handleChange }
              type="radio"
              name="pagamento"
              id="boleto"
              value="boleto"
            />
            {' '}
            Boleto
          </label>
          <label htmlFor="cartao">
            Cartão de crédito
            <input
              onChange={ handleChange }
              type="radio"
              name="pagamento"
              value="visa"
            />
            {' '}
            Visa
            <input
              onChange={ handleChange }
              type="radio"
              name="pagamento"
              value="mastercard"
            />
            {' '}
            MasterCard
            <input
              onChange={ handleChange }
              type="radio"
              name="pagamento"
              value="elo"
            />
            {' '}
            Elo
          </label>
        </div>
      </section>
    );
  }
}

FormaDePagamento.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
