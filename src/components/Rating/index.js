import React from 'react';

class Rating extends React.Component {
  render() {
    return (
      <form>
        <h2>Avaliações</h2>
        <div>
          <input
            type="text"
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
          placeholder="Mensagem(opcioanl)"
        />
        <button type="button">Avaliar</button>
      </form>
    );
  }
}

export default Rating;
