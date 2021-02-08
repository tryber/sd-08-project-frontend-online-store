import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Evaluations extends Component {
  render() {
    const { evaluations } = this.props;
    return (
      <fieldset>
        <legend>Avaliações</legend>
        {evaluations.map(({ email, rate, comment }, index) => (
          <div key={ index }>
            <h3>{ email }</h3>
            <p>{ rate }</p>
            <p>{ comment }</p>
            <hr />
          </div>
        ))}
      </fieldset>
    );
  }
}

Evaluations.propTypes = {
  evaluations: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Evaluations;
