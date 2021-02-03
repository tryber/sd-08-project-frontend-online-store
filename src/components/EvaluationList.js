import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EvaluationList extends Component {
  renderEvaluation = () => {
    const { saveEvaluation, state } = this.props;
    const { evaluation } = state;
    // No requisito 13 começaram a aparecer problemas pois esse formulario depende de mudanças no localStorage e o mesmo nem sempre inicia com um comentario
    if (evaluation) saveEvaluation();
    return (
      <ul>
        Avaliações
        {evaluation ? evaluation.map((element) => (
          <li key={ element.comment }>
            {`Nota: ${element.rating}
              Avaliação: ${element.comment}`}
          </li>
        )) : <p>Carregando Comentarios...</p>}
      </ul>
    );
  }

  render() {
    return (
      <div>
        {this.renderEvaluation()}
      </div>
    );
  }
}

EvaluationList.propTypes = {
  state: PropTypes.shape({
    comment: PropTypes.string,
    rating: PropTypes.number,
    evaluation: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  saveEvaluation: PropTypes.func.isRequired,
};

export default EvaluationList;
