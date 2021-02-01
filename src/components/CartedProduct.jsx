import React from 'react';
import PropTypes from 'prop-types';

class CartedProduct extends React.Component {
  constructor() {
    super();
    this.state = {
      quantity: 1,
    };
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }

  increase() {
    const { product } = this.props;
    console.log(product);
    const { available_quantity: availableQuantity } = product;
    this.setState((state) => ({
      quantity:
        state.quantity + 1 > availableQuantity ? state.quantity : state.quantity + 1,
    }));
  }

  decrease() {
    this.setState((state) => ({
      quantity: state.quantity > 1 ? state.quantity - 1 : state.quantity,
    }));
  }

  render() {
    const { product } = this.props;
    const { quantity } = this.state;
    return (
      <li>
        <h3 data-testid="shopping-cart-product-name">{ product.title }</h3>
        <button type="button">X</button>
        <p data-testid="shopping-cart-product-quantity">{ quantity }</p>
        <button
          type="button"
          data-testid="product-increase-quantity"
          onClick={ this.increase }
        >
          +
        </button>
        <button
          type="button"
          data-testid="product-decrease-quantity"
          onClick={ this.decrease }
        >
          -
        </button>
        <img src={ product.thumbnail } alt="product model" />
        <h4>{product.price}</h4>
      </li>
    );
  }
}

export default CartedProduct;

CartedProduct.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    available_quantity: PropTypes.number,
  }).isRequired,
};
