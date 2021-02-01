import React from 'react';
import PropTypes from 'prop-types';

import EvaluationCard from './EvaluationCard';

class EvaluationList extends React.Component {
  render() {
    const { evaluations } = this.props;
    return (
      <div>
        { evaluations.map((evaluation, index) => (
          <EvaluationCard
            key={ index }
            rating={ evaluation.rating }
            text={ evaluation.text }
          />
        )) }
      </div>
    );
  }
}

export default EvaluationList;

EvaluationList.propTypes = {
  evaluations: PropTypes.arrayOf(PropTypes.object),
};

EvaluationList.defaultProps = {
  evaluations: [],
};
