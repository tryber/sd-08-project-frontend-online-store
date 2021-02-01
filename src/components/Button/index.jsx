import React from 'react';
import { TiShoppingCart } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { shoppingCart } = this.props;
    return (
      <Link
        data-testid="shopping-cart-button"
        to={ {
          pathname: '/shopping-cart',
          state: { shoppingCart },
        } }
      >
        <TiShoppingCart size={ 30 } />
      </Link>
    );
  }
}

Button.propTypes = {
  shoppingCart: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Button;
