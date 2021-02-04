import React from 'react';
import PropTypes from 'prop-types';

class StarsContainer extends React.Component {
  constructor() {
    const STARS_VALUE = ['1', '2', '3', '4', '5'];
    super();
    this.state = {
      stars: STARS_VALUE,
    };
  }

  render() {
    const { stars } = this.state;
    const { handleStarsInput } = this.props;
    return (
      <fieldset>
        <legend>Classificação</legend>
        {
          stars.map((number, index) => (
            <label htmlFor={ `${number}-stars` } key={ index }>
              <input
                name="stars"
                type="radio"
                id={ `${number}-stars` }
                value={ number }
                onClick={ handleStarsInput }
              />
              {number}
            </label>))
        }
        {/* <label htmlFor="one-star">
          <input
            type="radio"
            id="stars"
            value={ 1 }
            onClick={ this.handleStarsInput }
          />
          1
        </label> */}
      </fieldset>
    );
  }
}

StarsContainer.propTypes = {
  handleStarsInput: PropTypes.func,
}.isRequired;

export default StarsContainer;
