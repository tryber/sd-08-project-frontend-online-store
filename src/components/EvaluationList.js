import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EvaluationList extends Component {
  componentDidUpdate = () => {
    const { saveEvaluation, state } = this.props;
    const { evaluation } = state;
    if (evaluation) saveEvaluation();
  }

  renderEvaluation = () => {
    const { state } = this.props;
    const { evaluation } = state;

    return (
      <ul>
        Avaliações
        {evaluation.length !== 0 ? evaluation.map((element) => (
          <li key={ element.comment }>
            {`Nota: ${element.rating}
              Avaliação: ${element.comment}`}
          </li>
        )) : <p>Não há avaliações ainda.</p>}
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
    rating: PropTypes.string,
    evaluation: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  saveEvaluation: PropTypes.func.isRequired,
};

export default EvaluationList;
