import React from 'react';
import PropTypes from 'prop-types';

class Reviews extends React.Component {
  render() {
    const { email, reviewText, rating } = this.props;

    return (
      <div>
        <span>{ email }</span>
        <form>
          <input
            readOnly
            type="radio"
            name="rating"
            value="1"
            checked={ rating === '1' }
          />
          <input
            readOnly
            type="radio"
            name="rating"
            value="2"
            checked={ rating === '2' }
          />
          <input
            readOnly
            type="radio"
            name="rating"
            value="3"
            checked={ rating === '3' }
          />
          <input
            readOnly
            type="radio"
            name="rating"
            value="4"
            checked={ rating === '4' }
          />
          <input
            readOnly
            type="radio"
            name="rating"
            value="5"
            checked={ rating === '5' }
          />
        </form>
        <p data-testid="product-detail-evaluation">{ reviewText }</p>
        <hr />
      </div>
    );
  }
}

Reviews.propTypes = {
  email: PropTypes.string.isRequired,
  reviewText: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
};

export default Reviews;
