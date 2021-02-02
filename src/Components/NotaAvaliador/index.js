import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class NotaAvaliador extends Component {
  constructor(props) {
    super(props);

    this.verifyRate = this.verifyRate.bind(this);
  }

  verifyRate(rate, value) {
    let checked = false;
    if (rate >= value) {
      checked = true;
    }
    return checked;
  }

  render() {
    const a = 1;
    const b = 2;
    const c = 3;
    const d = 4;
    const e = 5;
    const { onHandleRatingChange, rating } = this.props;
    return (
      <div>
        <label htmlFor="rating">
          Classificação:
          <input
            name="rating"
            type="checkbox"
            value="1"
            checked={ this.verifyRate(rating, a) }
            onChange={ onHandleRatingChange }
          />
          <input
            name="rating"
            type="checkbox"
            value="2"
            checked={ this.verifyRate(rating, b) }
            onChange={ onHandleRatingChange }
          />
          <input
            name="rating"
            type="checkbox"
            value="3"
            checked={ this.verifyRate(rating, c) }
            onChange={ onHandleRatingChange }
          />
          <input
            name="rating"
            type="checkbox"
            value="4"
            checked={ this.verifyRate(rating, d) }
            onChange={ onHandleRatingChange }
          />
          <input
            name="rating"
            type="checkbox"
            value="5"
            checked={ this.verifyRate(rating, e) }
            onChange={ onHandleRatingChange }
          />
        </label>
      </div>
    );
  }
}

NotaAvaliador.propTypes = {
  onHandleRatingChange: PropTypes.func.isRequired,
  rating: PropTypes.number,
};

NotaAvaliador.defaultProps = {
  rating: 0,
};
