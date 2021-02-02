import React from 'react';
import PropTypes from 'prop-types';

class EvaluationCard extends React.Component {
  render() {
    const { text, rating } = this.props;
    return (
      <div>
        <p>Comentário:</p>
        <p>{ text }</p>
        <p>
          Nota do usuário:
          { rating }
        </p>
      </div>
    );
  }
}

export default EvaluationCard;

EvaluationCard.propTypes = {
  text: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
};
