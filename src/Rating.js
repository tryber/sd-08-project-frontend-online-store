import React from 'react';

class Ratting extends React.Component {
  render() {
    return (
      <form>
        <h2>Avaliações</h2>
        <fieldset>
          <div>
            <input
              type="email"
              placeholder="Email"
            />
            <input type="radio" value={ 1 } />
            <input type="radio" value={ 2 } />
            <input type="radio" value={ 3 } />
            <input type="radio" value={ 4 } />
            <input type="radio" value={ 5 } />
          </div>
          <textarea
            data-testid="product-detail-evaluation"
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
