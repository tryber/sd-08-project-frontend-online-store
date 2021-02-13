import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ShoppingCart extends React.Component {
  constructor() {
    super();

    this.state = {
      cart: [],
    };

    this.handleDecreaseQuantity = this.handleDecreaseQuantity.bind(this);
    this.handleIncreaseQuantity = this.handleIncreaseQuantity.bind(this);
  }

  componentDidMount() {
    this.handlePropsToState();
  }

  handlePropsToState() {
    const { cart } = this.props;

    this.setState({
      cart,
    });
  }

  handleDecreaseQuantity(event) {
    const { cart } = this.state;
    const allState = this.state;
    const findItem = cart.map((item) => item.id).indexOf(event.target.id);

    if (allState.cart[findItem].quantity > 1) {
      allState.cart[findItem].quantity -= 1;
      allState.cart[findItem].totalPrice = allState.cart[findItem].price
        * allState.cart[findItem].quantity;

      this.setState(allState);
    }
  }

  handleIncreaseQuantity(event) {
    const { cart } = this.state;
    const allState = this.state;
    const findItem = cart.map((item) => item.id).indexOf(event.target.id);

    if (allState.cart[findItem].quantity < allState.cart[findItem].available_quantity) {
      allState.cart[findItem].quantity += 1;
      allState.cart[findItem].totalPrice = allState.cart[findItem].price
        * allState.cart[findItem].quantity;

      this.setState(allState);
    }
  }

  renderButtonsQuantity(id) {
    return (
      <>
        <button
          id={ id }
          data-testid="product-decrease-quantity"
          type="button"
          onClick={ this.handleDecreaseQuantity }
        >
          -
        </button>

        <button
          id={ id }
          data-testid="product-increase-quantity"
          type="button"
          onClick={ this.handleIncreaseQuantity }
        >
          +
        </button>
      </>
    );
  }

  render() {
    const { cart } = this.state;

    if (cart.length === 0) {
      return (
        <main>
          <header>
            <Link to="/">Back</Link>
            <h1>Carrinho de compras</h1>
          </header>

          <p data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio.
          </p>
        </main>
      );
    }

    return (
      <main>
        {cart.map((item) => (
          <section key={ item.id }>
            <button type="button">
              X
            </button>
            <p data-testid="shopping-cart-product-name">
              {item.title}
            </p>

            <img src={ item.thumbnail } alt="Thumbnail" />

            { this.renderButtonsQuantity(item.id) }

            <p data-testid="shopping-cart-product-quantity">{item.quantity}</p>
            <span>
              R$
              { item.totalPrice.toFixed(2) }
            </span>
          </section>
        ))}
      </main>
    );
  }
}

ShoppingCart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ShoppingCart;
