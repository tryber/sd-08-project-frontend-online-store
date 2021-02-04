import React from 'react';
import { Link } from 'react-router-dom';
import ProductsCart from '../components/ProductsCart';

class Checkout extends React.Component {
  payments() {
    return (
      <fieldset>
        <h3>Método de Pagamento</h3>
        <label htmlFor="boleto">
          BOLETO
          <input type="radio" id="boleto" />
        </label>
        <label htmlFor="visa">
          VISA
          <input type="radio" id="visa" />
        </label>
        <label htmlFor="master">
          MASTERCARD
          <input type="radio" id="master" />
        </label>
        <label htmlFor="outro">
          OUTRO
          <input type="radio" id="outro" />
        </label>
      </fieldset>
    );
  }

  render() {
    const products = JSON.parse(localStorage.getItem('productsCart'));
    const estados = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES',
      'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR',
      'PE', 'PI', 'RJ', 'RN', 'RO', 'RS', 'RR', 'SC', 'SE', 'SP', 'TO'];
    const valor = products.map((product) => product.price);
    const result = valor.reduce((total, produto) => total + produto);
    return (
      <div>
        <fieldset>
          <h3>Revise os Produtos</h3>
          {products.map((product) => (
            <ProductsCart key={ product.id } product={ product } />))}
          <h4>{`Total: R$ ${result}` }</h4>
        </fieldset>
        <fieldset>
          <h3>Informações do Comprador</h3>
          <form>
            <input
              type="text"
              placeholder="Nome Completo"
              data-testid="checkout-fullname"
            />
            <input type="text" placeholder="CPF" data-testid="checkout-cpf" />
            <input type="text" placeholder="Email" data-testid="checkout-email" />
            <input type="text" placeholder="Telefone" data-testid="checkout-phone" />
            <input type="text" placeholder="CEP" data-testid="checkout-cep" />
            <input type="text" placeholder="Endereço" data-testid="checkout-address" />
            <input type="text" placeholder="Complemento" />
            <input type="text" placeholder="Número" />
            <input type="text" placeholder="Cidade" />
            <select>
              { estados.map((estado) => <option key={ estado }>{estado}</option>) }
            </select>
          </form>
        </fieldset>
        { this.payments() }
        <div>
          <Link to="/"><button type="button">Comprar</button></Link>
        </div>
      </div>
    );
  }
}

export default Checkout;
