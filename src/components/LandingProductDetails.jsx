import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LandingProductDetails extends Component {
  render() {
    const { location: { product } } = this.props;
    const { title, thumbnail, attributes, price } = product;
    return (
      <div>
        <h1>{title}</h1>
        <img src={ thumbnail } alt={ title } />
        <p>{price}</p>
        {console.log(product)}
      </div>
    );
  }
}

LandingProductDetails.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
  }).isRequired,
};

export default LandingProductDetails;
