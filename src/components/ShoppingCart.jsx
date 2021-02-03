import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import removeIcon from '../remove-item-icon.svg';

class ShoppingCart extends React.Component {
  constructor() {
    super();

    this.state = {
      cart: [],
    };

    this.decreaseQuantity = this.decreaseQuantity.bind(this);
    this.increaseQuantity = this.increaseQuantity.bind(this);
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

  getCartTotalPrice() {
    const { cart } = this.state;
    return cart.reduce((acc, item) => (acc + item.totalPrice), 0);
  }

  increaseQuantity(event) {
    const { cart } = this.state;
    const index = cart.map((item) => item.id).indexOf(event.target.id);
    const stateCopy = this.state;
    stateCopy.cart[index].quantity += 1;
    stateCopy.cart[index].totalPrice = stateCopy.cart[index].price
    * stateCopy.cart[index].quantity;
    this.setState(stateCopy);
  }

  decreaseQuantity(event) {
    const { cart } = this.state;
    const index = cart.map((item) => item.id).indexOf(event.target.id);
    const stateCopy = this.state;
    if (stateCopy.cart[index].quantity !== 0) {
      stateCopy.cart[index].quantity -= 1;
      stateCopy.cart[index].totalPrice = stateCopy.cart[index].price
      * stateCopy.cart[index].quantity;
      this.setState(stateCopy);
    }
  }

  renderIncreaseButton(id) {
    return (
      <button
        data-testid="product-increase-quantity"
        id={ id }
        className="increase-button"
        type="button"
        onClick={ this.increaseQuantity }
      >
        +
      </button>
    );
  }

  renderDecreaseButton(id) {
    return (
      <button
        data-testid="product-decrease-quantity"
        id={ id }
        className="decrease-button"
        type="button"
        onClick={ this.decreaseQuantity }
      >
        -
      </button>
    );
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
      <table className="cart-list-items">
        <thead>
          <tr>
            <th> </th>
            <th>Descrição</th>
            <th className="quantity-header">Quantidade</th>
            <th>Valor</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          { cart.map((item) => (
            <tr key={ item.id }>
              <td><img alt="Item" src={ item.thumbnail } /></td>
              <td data-testid="shopping-cart-product-name">{item.title}</td>
              <td className="cart-list-qnt" data-testid="shopping-cart-product-quantity">
                {this.renderIncreaseButton(item.id)}
                { item.quantity }
                {this.renderDecreaseButton(item.id)}
              </td>
              <td>{(item.totalPrice).toFixed(2)}</td>
              <td><img alt="Remove Item Icon" src={ removeIcon } /></td>
            </tr>)) }
          <tr>
            <td> </td>
            <td> </td>
            <td className="cart-list-total"><strong>Total</strong></td>
            <td>{ `R$ ${this.getCartTotalPrice().toFixed(2)}` }</td>
          </tr>
        </tbody>
      </table>
    );
  }

  render() {
    const { cart } = this.state;

    return (
      <section className="product-list-container">

        { this.renderCartList(cart) }

        <Link
          to={ {
            pathname: '/checkout',
            state: { cart } } }
          data-testid="checkout-products"
        >
          Finalizar Compra
        </Link>

      </section>
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
