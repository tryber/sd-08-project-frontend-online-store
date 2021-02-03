import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

class Checkout extends React.Component {
  constructor() {
    super();
    this.state = {
      redirect: false,
    };
    this.redirecionaHome = this.redirecionaHome.bind(this);
  }

  static getDerivedStateFromProps(props) {
    if (props.cart.length === 0) {
      return { redirect: true };
    }
    return null;
  }

  input(type, name, label) {
    return (
      <label htmlFor={ name }>
        { label }
        <input type={ type } id={ name } data-testid={ `checkout-${name}` } required />
      </label>
    );
  }

  revisarPedido(carrinho) {
    return (
      carrinho.map((element, index) => (
        <p
          key={ index }
        >
          {element.title}
          {' '}
          {element.price}
        </p>))
    );
  }

  total(valores) {
    return (
      <p>
        Total:
        {' '}
        {
          valores.reduce((acumulador, atual) => {
            acumulador += atual.price;
            return acumulador;
          }, 0)
        }
      </p>

    );
  }

  redirecionaHome(event) {
    const { cleanCart } = this.props;
    event.preventDefault();
    if (event.target.form.checkValidity()) {
      return cleanCart();
    }
  }

  renderForm() {
    return (
      <form>
        { this.input('text', 'fullname', 'Nome completo')}
        { this.input('text', 'email', 'Email')}
        { this.input('text', 'cpf', 'CPF')}
        { this.input('text', 'phone', 'Telefone')}
        { this.input('text', 'cep', 'CEP')}
        { this.input('text', 'address', 'Endereço')}
        <button type="submit" onClick={ this.redirecionaHome }>Comprar</button>
      </form>
    );
  }

  render() {
    const { cart } = this.props;
    const { redirect } = this.state;
    if (redirect) { return <Redirect to="/" />; }
    return (
      <div>
        { this.revisarPedido(cart) }
        { this.total(cart) }
        { this.renderForm() }
      </div>
    );
  }
}
Checkout.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
  cleanCart: PropTypes.func.isRequired,
};
export default Checkout;
