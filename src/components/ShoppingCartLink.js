import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ShoppingCartLink extends React.Component {
  render() {
    const { onCart } = this.props;
    return (
      <div>
        <Link
          to={ {
            pathname: '/shopping-cart/',
            state: { onCart } } }
          data-testid="shopping-cart-button"
        >
          CARRINHO
        </Link>
      </div>
    );
  }
}

ShoppingCartLink.propTypes = {
  onCart: PropTypes.arrayOf(
    PropTypes.object,
  ),
};

ShoppingCartLink.defaultProps = {
  onCart: [],
};

export default ShoppingCartLink;
