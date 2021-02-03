import React from 'react';
import PropTypes from 'prop-types';

import InforComprador from './InforComprador';
import MetodoPagmento from './MetodoPagamento';

class Checkout extends React.Component {
  render() {
    const { getFromLocalStorage, location } = this.props;
    const resumo = getFromLocalStorage();
    const result = location.calculateTotalPrice();
    return (
      <div>
        <fieldset>
          <legend>Revise seus Produtos</legend>
          <div>
            {resumo.map((arry) => (
              <div key={ arry.id }>
                <img src={ arry.thumbnail } alt="img" />
                <p>
                  Titulo:
                  { arry.title }
                </p>
                <p>
                  Quantidade:
                  { arry.amountToBuy }
                </p>
                <p>
                  Preço:
                  { arry.price }
                </p>
              </div>
            ))}
            <h1>
              Total: R$
              { result }
            </h1>
          </div>
        </fieldset>
        <InforComprador />
        <MetodoPagmento />
        <button type="button">Comprar</button>
      </div>
    );
  }
}

Checkout.propTypes = {
  getFromLocalStorage: PropTypes.func.isRequired,
  location: PropTypes.func.isRequired,
};

export default Checkout;
