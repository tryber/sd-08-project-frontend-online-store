import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CartQuantifier extends Component {
  render() {
    const { size } = this.props;
    return (
      <div data-testid="shopping-cart-size">
        { size }
      </div>
    );
  }
}

CartQuantifier.propTypes = {
  size: PropTypes.number.isRequired,
};

export default CartQuantifier;
