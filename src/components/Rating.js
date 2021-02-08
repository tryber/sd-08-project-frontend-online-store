import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rating extends Component {
  render() {
    const { handleChange, handleRating, email, rate, comment } = this.props;

    return (
      <fieldset>
        <legend>Avalie</legend>
        <form onSubmit={ handleRating }>
          <input
            name="email"
            type="mail"
            placeholder="Email"
            value={ email }
            onChange={ handleChange }
          />

          <input
            name="rate"
            type="number"
            placeholder="5"
            min="0"
            max="5"
            value={ rate }
            onChange={ handleChange }
          />

          <textarea
            name="comment"
            data-testid="product-detail-evaluation"
            placeholder="Comentários"
            maxLength="200"
            value={ comment }
            onChange={ handleChange }
          />

          <input type="submit" value="Avaliar" />
        </form>
      </fieldset>
    );
  }
}

Rating.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleRating: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  rate: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
};

export default Rating;
