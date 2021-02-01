import React from 'react';

class Evaluation extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h2>Avaliações</h2>
          <input
            name="email"
            type="text"
            placeholder="Email"
          />
          <br />
          <input
            type="number"
            min="0"
            max="5"
          />
          <br />
          <textarea
            cols="50"
            rows="10"
            data-testid="product-detail-evaluation"
            type="text"
            placeholder="Comentário (Opcional)"
          />
          <br />
          <button type="button">Avaliar</button>
        </div>
      </div>
    );
  }
}

export default Evaluation;
