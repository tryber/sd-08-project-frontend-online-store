import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ShoppingCart extends React.Component {
  constructor() {
    super();

    this.state = { };
    this.addProduct = this.addProduct.bind(this);
    this.lessProduct = this.lessProduct.bind(this);
  }

  componentDidMount() {
    const { location: { state: { shoppingCart } } } = this.props;
    shoppingCart.map((item) => this.setState({
      [item.id]: 1,
    }));
  }

  addProduct(item) {
    const { available_quantity: avaibleQuantity } = item
    const { [item.id]: quantity} = this.state;
    if (quantity >= avaibleQuantity) return;
    this.setState((prevState) => ({
      [item.id]: prevState[item.id] + 1,
    }));
  }

  lessProduct(item) {
    const { [item.id]: quantity } = this.state;
    if (quantity === 1) return;
    this.setState((prevState) => ({
      [item.id]: prevState[item.id] - 1,
    }));
  }

  render() {
    const { location: { state: { shoppingCart } } } = this.props;
    if (!shoppingCart.length) {
      return (
        <div>
          <Link to="/">Home</Link>
          <p data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </p>
        </div>
      );
    }

    return (
      <div>
        <Link to="/">Home</Link>
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
