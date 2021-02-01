import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LandingProductDetails extends Component {
  render() {
    const { location: { product } } = this.props;
    const { title, thumbnail, price } = product;
    return (
      <div>
        <h1 data-testid="product-detail-name">{title}</h1>
        <img src={ thumbnail } alt={ title } />
        <p>{price}</p>
        {console.log(product)}
      </div>
    );
  }
}

LandingProductDetails.propTypes = {
  location: PropTypes.shape({ product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }) }).isRequired,
};

export default LandingProductDetails;
