import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ShoppingCartLink extends React.Component {
  render() {
    const { sumAmount } = this.props;
    return (
      <div>
        <Link
          to={ {
            pathname: '/shopping-cart/',
          } }
          data-testid="shopping-cart-button"
        >
          <span data-testid="shopping-cart-size">
            CARRINHO
            {' '}
            {sumAmount}
          </span>

        </Link>
      </div>
    );
  }
}

ShoppingCartLink.propTypes = {
  sumAmount: PropTypes.number,
};

ShoppingCartLink.defaultProps = {
  sumAmount: 0,
};

export default ShoppingCartLink;
