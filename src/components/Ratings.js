import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DetailsForm from './DetailsForm';

export default class Rating extends Component {
  render() {
    const { ratings } = this.props;
    return (
      <div>
        {ratings.map((rate) => (
          <div key={ rate[1] }>
            <p>{rate[1]}</p>
            <p>{rate[2]}</p>
            <p>{rate[3]}</p>
            <hr />
          </div>
        ))}
      </div>
    );
  }
}

Rating.propTypes = {
  ratings: PropTypes.arrayOf(PropTypes.array).isRequired,
};