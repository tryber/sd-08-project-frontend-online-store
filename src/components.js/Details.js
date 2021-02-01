import React from 'react';
import PropTypes from 'prop-types';

class Details extends React.Component {
  render() {
    const { match: { params: { product } } } = this.props;

    return (
      <div>
        { product }
      </div>
    );
  }
}

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      product: PropTypes.string,
    }),
  }).isRequired,
};

export default Details;
