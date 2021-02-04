import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class DetailsForm extends Component {
  render() {
    const { handleState, handleSubmit } = this.props;
    return (
      <div>
        <form>
          <label htmlFor="nam">
            Digite seu nome
            <input
              data-testid="product-detail-evaluation"
              type="text"
              id="nam"
              name="name"
              onChange={ handleState }
            />
          </label>
          <label htmlFor="type">
            adicione sua avaliação
            <textarea
              data-testid="product-detail-evaluation"
              type="text"
              id="type"
              name="evaluation"
              onChange={ handleState }
            />
          </label>
          <label htmlFor="rat">
            adiciona sua nota
            <input
              type="number"
              id="rat"
              name="rate"
              min="1  "
              max="5"
              onChange={ handleState }
            />
          </label>
        </form>
        <button type="button" onClick={ handleSubmit }>
          Submit
        </button>
      </div>
    );
  }
}

DetailsForm.propTypes = {
  handleState: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
