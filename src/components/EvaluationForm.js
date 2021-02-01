import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EvaluationForm extends Component {
  renderForm = () => {
    const { handleSubmit, updateField, state } = this.props;
    const { rating, comment } = state;

    return (
      <form>
        <label htmlFor="rating">
          Nota
          <input
            id="rating"
            type="number"
            step={ 0.5 }
            min={ 0 }
            max={ 5 }
            value={ rating }
            onChange={ (event) => updateField('rating', event.target.value) }
          />
        </label>
        Deixe sua avaliação:
        <label htmlFor="comment">
          <textarea
            data-testid="product-detail-evaluation"
            id="comment"
            value={ comment }
            onChange={ (event) => updateField('comment', event.target.value) }
          />
        </label>
        <button
          type="button"
          onClick={ handleSubmit }
        >
          Submeter Avaliação
        </button>
      </form>
    );
  }

  render() {
    return (
      <div>
        {this.renderForm()}
      </div>
    );
  }
}

EvaluationForm.propTypes = {
  state: PropTypes.shape({
    comment: PropTypes.string,
    rating: PropTypes.number,
    evaluation: PropTypes.func,
  }).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  updateField: PropTypes.func.isRequired,
};

export default EvaluationForm;
