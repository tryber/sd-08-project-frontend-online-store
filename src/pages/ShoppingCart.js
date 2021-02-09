import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = {
      cart: [],
    };
    this.handlePropsToState = this.handlePropsToState.bind(this);
    this.handlePropsToState = this.handleDecreaseQuantity(this);
    this.handlePropsToState = this.handleIncreaseQuantity(this);
    this.handlePropsToState = this.renderButtons(this);
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
      allState.cart[findItem].totalPrice = allState.cart[findItem].price *
      allState.cart[findItem].quantity;
      this.setState(allState);
    }
  }

  handleIncreaseQuantity(event) {
    const { cart } = this.state;
    const allState = this.state;
    const findItem = cart.map((item) => item.id).indexOf(event.target.id);
    allState.cart[findItem].quantity += 1;
    allState.cart[findItem].totalPrice = allState.cart[findItem].price *
    allState.cart[findItem].quantity;
    this.setState(allState);
  }

  renderButtons() {
    return (
      <>
        <button
          id={ item.id }
          data-testid="product-decrease-quantity"
          type="button"
          onClick={ this.handleDecreaseQuantity }
        >
          -
        </button>

        <button
          id={ item.id }
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
    const { cart } = this.props;

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
        <header>
          <Link to="/">Back</Link>

          <h1>Carrinho de compras</h1>
        </header>

        {cart.map((item) => (
          <section key={ item.id }>
            <button type="button">
              X
            </button>
            <p data-testid="shopping-cart-product-name">
              {item.title}
            </p>

            <img src={ item.thumbnail } alt="Thumbnail" />

            {this.renderButtons()}

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
