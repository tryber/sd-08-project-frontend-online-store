import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FreteGratis extends Component {
  render() {
    const { product } = this.props;
    const { shipping } = product;
    const freeShipping = shipping.free_shipping;

    if (freeShipping === true) {
      return (
        <p data-testid="free-shipping">Frete Grátis</p>
      );
    }
    return <div />;
  }
}

FreteGratis.propTypes = {
  product: PropTypes.shape({
    shipping: PropTypes.shape({
      free_shipping: PropTypes.bool,
    }),
  }).isRequired,
};
