import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ShopButtonImage from './download.png';

class ShopButton extends Component {
  render() {
    const { cartProduct } = this.props;
    return (
      <Link
        data-testid="shopping-cart-button"
        to={ { pathname: '/shopping-cart/', cartProduct } }
      >
        <img
          className="img-cart-button btn btn-primary"
          src={ ShopButtonImage }
          alt="Logo"
        />
      </Link>
    );
  }
}

ShopButton.propTypes = {
  cartProduct: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ShopButton;
