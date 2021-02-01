import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    const { location: { state: { buyProductsId } } } = this.props;
  }

  render() {
    const { location: { state: { buyProductsId } } } = this.props;
    console.log(buyProductsId);
    return (
      <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
    );
  }
}

ShoppingCart.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      buyProductsId: PropTypes.arrayOf(PropTypes.string),
    }),
  }),
};

ShoppingCart.defaultProps = {
  location: {
    state: {
      buyProductsId: [],
    },
  },
};

export default ShoppingCart;
