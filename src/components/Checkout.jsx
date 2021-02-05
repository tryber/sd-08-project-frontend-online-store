import React from 'react';
import PropTypes from 'prop-types';

class Checkout extends React.Component {
  getCartTotalPrice() {
    const { location: { state: { cart } } } = this.props;
    return cart.reduce((acc, item) => (acc + item.totalPrice), 0);
  }

  renderCartList(cart) {
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
                { item.quantity }
              </td>
              <td>{(item.totalPrice).toFixed(2)}</td>
              <td> </td>
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

  renderCheckoutForm() {
    return (
      <form>
        <input data-testid="checkout-fullname" placeholder="Nome Completo" type="text" />
        <input data-testid="checkout-email" placeholder="Email" type="text" />
        <input data-testid="checkout-cpf" placeholder="CPF" type="text" />
        <input data-testid="checkout-phone" placeholder="Telefone" type="text" />
        <input data-testid="checkout-cep" placeholder="CEP" type="text" />
        <input data-testid="checkout-address" placeholder="Endereço" type="text" />
      </form>
    );
  }

  render() {
    const { location: { state: { cart } } } = this.props;

    return (
      <section className="product-list-container">
        {this.renderCartList(cart)}
        {this.renderCheckoutForm()}
        <h3>Método de pagamento</h3>
        <button type="button">Comprar</button>
      </section>
    );
  }
}

Checkout.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      cart: PropTypes.arrayOf(PropTypes.object),
    }),
  }),
};

Checkout.defaultProps = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      cart: [],
    }),
  }),
};

export default Checkout;
