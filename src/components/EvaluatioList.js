import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EvaluationList extends Component {
  renderEvaluation = () => {
    const { saveEvaluation, state } = this.props;
    const { evaluation } = state;

    if (evaluation.length !== 0) saveEvaluation();
    return (
      <ul>
        Avaliações
        {evaluation.map((element) => (
          <li key={ element.comment }>
            {`Nota: ${element.rating}
              Avaliação: ${element.comment}`}
          </li>
        ))}
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
    evaluation: PropTypes.func,
  }).isRequired,
  saveEvaluation: PropTypes.func.isRequired,
};

export default EvaluationList;
