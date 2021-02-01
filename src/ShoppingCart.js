import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ShoppingCart extends React.Component {
  constructor() {
    super();

    this.addProduct = this.addProduct.bind(this);
    this.lessProduct = this.lessProduct.bind(this);
  }

  addProduct(item) {
    this.setState(() => ({
      quantity: item.quantity += 1
    }))
  }

  lessProduct(item) {
    this.setState(() => ({
      quantity: item.quantity -= 1
    }))
  }
  render() {
    const { location: { state: { shoppingCart } } } = this.props;

    if (!shoppingCart) {
      return (
        <p data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </p>
      )
    }

    return (
      <div>
        <Link to="/">Home</Link>
        {shoppingCart.map((item) => (
          <div key={ item.id }>
            <p data-testid="shopping-cart-product-name">{ item.title} </p>
            <span>Quantidade</span>
            <button
              data-testid="product-decrease-quantity"
              onClick={ () => this.lessProduct(item)}
            >
              -
                </button>
            <span data-testid="shopping-cart-product-quantity">{ item.quantity }</span>
            <button
              data-testid="product-increase-quantity"
              onClick={ () => this.addProduct(item)}
            >
              +
                </button>
          </div>
        ))}
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      shoppingCart: PropTypes.arrayOf(PropTypes.object),
    }),
  }).isRequired,
};

export default ShoppingCart;
