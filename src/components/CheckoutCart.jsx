import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MakeInput from './MakeInput';

class CheckoutCart extends React.Component {
  preForm() {
    const { cartList } = this.props;
    return (
      <section>
        <p>Itens no carrinho:</p>
        <ul>
          {cartList.map((product) => (
            <li key={ product.id }>
              {`Item: ${product.title} |
                Qt: ${product.quantity} | R$ ${product.price * product.quantity}`}
            </li>))}
        </ul>
        <p>
          {`Total: R$ ${
            cartList.reduce(((acc, val) => acc + val.price * val.quantity), 0)
          }`}
        </p>
      </section>
    );
  }

  render() {
    return (
      <main>
        { this.preForm() }
        <form>
          <MakeInput name="fullname" labelName="Nome" />
          <MakeInput name="email" labelName="E-mail" />
          <MakeInput name="cpf" labelName="CPF" />
          <MakeInput name="phone" labelName="Telefone" />
          <MakeInput name="cep" labelName="CEP" />
          <MakeInput name="address" labelName="Endereço" />
          <button type="submit">Finalizar compra</button>
          <Link to="/shopping-cart">Voltar</Link>
        </form>
      </main>
    );
  }
}

CheckoutCart.propTypes = {
  cartList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CheckoutCart;
