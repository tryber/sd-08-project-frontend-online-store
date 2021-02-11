import React from 'react';
import PropTypes from 'prop-types';

class ReviewForm extends React.Component {
  constructor() {
    super();

    this.renderRadioButtons = this.renderRadioButtons.bind(this);
  }

  renderRadioButtons() {
    const { selected, formHandler } = this.props;
    return (
      <>
        <input
          type="radio"
          name="selected"
          id="selected-1"
          value="1"
          onChange={ formHandler }
          checked={ selected === '1' }
        />
        <input
          type="radio"
          name="selected"
          id="selected-2"
          value="2"
          onChange={ formHandler }
          checked={ selected === '2' }
        />
        <input
          type="radio"
          name="selected"
          id="selected-3"
          value="3"
          onChange={ formHandler }
          checked={ selected === '3' }
        />
        <input
          type="radio"
          name="selected"
          id="selected-4"
          value="4"
          onChange={ formHandler }
          checked={ selected === '4' }
        />
        <input
          type="radio"
          name="selected"
          id="selected-5"
          value="5"
          onChange={ formHandler }
          checked={ selected === '5' }
        />
      </>
    );
  }

  render() {
    const { email, reviewText, formHandler, handlerSubmit } = this.props;

    return (
      <div>
        Avaliações
        <form>
          <input
            name="email"
            type="text"
            placeholder="Email"
            value={ email }
            onChange={ formHandler }
          />
          { this.renderRadioButtons() }
          <textarea
            data-testid="product-detail-evaluation"
            name="reviewText"
            placeholder="Mensagem (opicional)"
            value={ reviewText }
            onChange={ formHandler }
          />
          <input
            type="submit"
            name="botao-avalicao"
            onClick={ handlerSubmit }
            value="Avaliar"
          />
        </form>
      </div>
    );
  }
}

ReviewForm.propTypes = {
  email: PropTypes.string.isRequired,
  reviewText: PropTypes.string.isRequired,
  selected: PropTypes.string.isRequired,
  formHandler: PropTypes.func.isRequired,
  handlerSubmit: PropTypes.func.isRequired,
};

export default ReviewForm;
