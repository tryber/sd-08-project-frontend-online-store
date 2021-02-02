import React from 'react';
import PropTypes from 'prop-types';

class ShoppingCart extends React.Component {
  constructor() {
    super();

    this.state = {
      cart: [],
    };
  }

  componentDidMount() {
    this.getCartList();
  }

  getCartList() {
    const { location: { state: { cart } } } = this.props;
    this.setState({
      cart,
    });
  }

  renderCartList(cart) {
    if (cart.length === 0) {
      return (
        <p data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </p>
      );
    }

    return (
      cart.map((item) => (
        <li className="cart-list-items" key={ item.id }>
          <img alt="Item" src={ item.thumbnail } />
          <p data-testid="shopping-cart-product-name">{item.title}</p>
          <p data-testid="shopping-cart-product-quantity">1</p>
          <p>{item.price.toFixed(2)}</p>
        </li>))
    );
  }

  render() {
    const { cart } = this.state;

    return (
      <ul>{ this.renderCartList(cart) }</ul>
    );
  }
}

ShoppingCart.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      cart: PropTypes.arrayOf(PropTypes.object),
    }),
  }),
};

ShoppingCart.defaultProps = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      cart: [],
    }),
  }),
};

export default ShoppingCart;
