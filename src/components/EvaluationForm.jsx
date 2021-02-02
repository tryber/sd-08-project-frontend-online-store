import React from 'react';
import PropTypes from 'prop-types';

class EvaluationForm extends React.Component {
  constructor() {
    super();
    this.state = {
      textAreaInput: '',
      rating: '',
    };
    this.textAreaInputUpdate = this.textAreaInputUpdate.bind(this);
    this.submitEvaluation = this.submitEvaluation.bind(this);
    this.ratingUpdate = this.ratingUpdate.bind(this);
  }

  textAreaInputUpdate(event) {
    this.setState({
      textAreaInput: event.target.value,
    });
  }

  ratingUpdate(event) {
    this.setState({
      rating: event.target.value,
    });
  }

  submitEvaluation(updatingCallback) {
    return () => {
      const { id } = this.props;
      const { textAreaInput, rating } = this.state;
      const evaluation = {
        text: textAreaInput,
        rating,
      };
      if (!localStorage.getItem(`${id}_evaluations`)) {
        localStorage.setItem(`${id}_evaluations`, JSON.stringify([evaluation]));
      } else {
        const previousEvaluations = JSON.parse(localStorage.getItem(`${id}_evaluations`));
        previousEvaluations.push(evaluation);
        localStorage.setItem(`${id}_evaluations`, JSON.stringify(previousEvaluations));
      }
      this.setState({
        textAreaInput: '',
        rating: '',
      });
      updatingCallback();
    };
  }

  render() {
    const { textAreaInput } = this.state;
    const { triggerUpdate } = this.props;
    return (
      <form>
        <p>Escolha aqui a sua avaliação:</p>
        <label htmlFor="1">
          <input type="radio" name="rating" value="1" onClick={ this.ratingUpdate } />
          1
        </label>
        <label htmlFor="2">
          <input type="radio" name="rating" value="2" onClick={ this.ratingUpdate } />
          2
        </label>
        <label htmlFor="3">
          <input type="radio" name="rating" value="3" onClick={ this.ratingUpdate } />
          3
        </label>
        <label htmlFor="4">
          <input type="radio" name="rating" value="4" onClick={ this.ratingUpdate } />
          4
        </label>
        <label htmlFor="5">
          <input type="radio" name="rating" value="5" onClick={ this.ratingUpdate } />
          5
        </label>
        <label htmlFor="evaluating-text">
          <p>Texto de Avaliação</p>
          <textarea
            data-testid="product-detail-evaluation"
            value={ textAreaInput }
            onChange={ this.textAreaInputUpdate }
          />
        </label>
        <button type="button" onClick={ this.submitEvaluation(triggerUpdate) }>
          Enviar Avaliação
        </button>
      </form>
    );
  }
}

export default EvaluationForm;

EvaluationForm.propTypes = {
  id: PropTypes.string.isRequired,
  triggerUpdate: PropTypes.func.isRequired,
};
