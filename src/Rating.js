import React from 'react';

class Ratting extends React.Component {
  render() {
    return (
      <form data-testid="product-detail-evaluation">
        <h2>Avaliações</h2>
        <fieldset>
          <div>
            <input
              type="email"
              placeholder="Email"
            />
            <input type="radio" />
            <input type="radio" />
            <input type="radio" />
            <input type="radio" />
            <input type="radio" />
          </div>
          <textarea
            cols="30"
            rows="10"
            maxLength="500"
            placeholder="Mensagem (opcional)"
          />
        </fieldset>
        <button type="button">Avaliar</button>
      </form>
    );
  }
}

export default Ratting;
