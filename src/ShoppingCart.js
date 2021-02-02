import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ShoppingCart extends React.Component {
  constructor() {
    super();

    this.state = { };
    this.addProduct = this.addProduct.bind(this);
    this.lessProduct = this.lessProduct.bind(this);
    this.renderLinkCheckout = this.renderLinkCheckout.bind(this);
  }

  componentDidMount() {
    const { location: { state: { shoppingCart } } } = this.props;
    shoppingCart.map((item) => this.setState({
      [item.id]: 1,
    }));
  }

  addProduct(item) {
    this.setState((prevState) => ({
      [item.id]: prevState[item.id] + 1,
    }));
  }

  lessProduct(item) {
    this.setState((prevState) => ({
      [item.id]: prevState[item.id] - 1,
    }));
  }

  renderLinkCheckout() {
    const { shoppingCart } = this.state;
    return (
      <Link
        data-testid="checkout-products"
        to={ { pathname: '/checkout', state: { shoppingCart } } }
      >
        Finalizar Compra
      </Link>
    );
  }

  render() {
    const { location: { state: { shoppingCart } } } = this.props;

    if (!shoppingCart.length) {
      return (
        <div>
          <Link to="/">Home</Link>
          { this.renderLinkCheckout() }
          <p data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </p>
        </div>
      );
    }

    return (
      <div>
        <Link to="/">Home</Link>
        { this.renderLinkCheckout() }
        {shoppingCart.map((item) => {
          const { [item.id]: quantity } = this.state;
          return (
            <div key={ item.id }>
              <p data-testid="shopping-cart-product-name">
                { item.title }
              </p>
              <span>Quantidade</span>
              <button
                type="button"
                data-testid="product-decrease-quantity"
                onClick={ () => this.lessProduct(item) }
              >
                -
              </button>
              <span data-testid="shopping-cart-product-quantity">{quantity}</span>
              <button
                type="button"
                data-testid="product-increase-quantity"
                onClick={ () => this.addProduct(item) }
              >
                +
              </button>
            </div>
          );
        })}
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
