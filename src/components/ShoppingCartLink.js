import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ShoppingCartLink extends React.Component {
  constructor(props) {
    super(props);
    const { onCart, increaseQuantity, decreaseQuantity, deleteProduct } = props;
    this.state = {
      onCart,
      increaseQuantity,
      decreaseQuantity,
      deleteProduct,
    };
  }

  render() {
    const { onCart, increaseQuantity, decreaseQuantity, deleteProduct } = this.state;
    return (
      <div>
        <Link
          to={ {
            pathname: '/shopping-cart/',
            state: { onCart,
              increaseQuantity,
              decreaseQuantity,
              deleteProduct,
            },
          } }
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
