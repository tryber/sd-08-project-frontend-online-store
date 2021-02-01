import React from 'react';
import PropTypes from 'prop-types';

class Review extends React.Component {
  render() {
    const { review } = this.props;
    return (
      <div>
        <p>{review.email}</p>
        <p>{review.textArea}</p>
        <p>{ `Rating: ${review.stars}` }</p>
      </div>
    );
  }
}

Review.propTypes = {
  review: PropTypes.shape({
    email: PropTypes.string.isRequired,
    textArea: PropTypes.string.isRequired,
    stars: PropTypes.number.isRequired,
  }).isRequired,
};

export default Review;
