import React, { Component } from 'react';

import NotaAvaliador from '../NotaAvaliador';

export default class FormularioAvaliaçao extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userEmail: '',
      rating: 0,
      comment: '',
    };

    this.handleRatingChange = this.handleRatingChange.bind(this);
  }

  handleRatingChange({ target }) {
    const { name, value } = target;

    this.setState({ [name]: value });
  }

  render() {
    const { userEmail, rating, comment } = this.state;
    return (
      <div>
        <fieldset>
          <legend>Avaliações:</legend>
          <input
            name="userEmail"
            type="text"
            value={ userEmail }
            placeholder="Email"
            onChange={ this.handleRatingChange }
            required
          />
          <NotaAvaliador
            onHandleRatingChange={ this.handleRatingChange }
            rating={ parseInt(rating, 10) }
          />
          <textarea
            name="comment"
            value={ comment }
            onChange={ this.handleRatingChange }
            placeholder="Comentário (opcional)"
            maxLength="150"
            data-testid="product-detail-evaluation"
          />
          <button type="button">
            AVALIAR
          </button>
        </fieldset>
      </div>
    );
  }
}
