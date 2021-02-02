import React from 'react';
import PropTypes from 'prop-types';

class Checkout extends React.Component {
  renderProductPlusValue = () => {
    const { onCart, sumPrice } = this.props;
    return (
      <div>
        {
          onCart.map((product, index) => (
            <div key={ index }>
              <img src={ product.thumbnail } alt={ product.title } />
              <h4 data-testid="shopping-cart-product-name">{product.title}</h4>
              <p>{ product.price }</p>
              <p data-testid="shopping-cart-product-quantity">{ product.amount}</p>
            </div>
          ))
        }
        {sumPrice(onCart)}
      </div>
    );
  }

  renderForm = () => (
    <form>
      Informações do Comprador
      <br />
      <input type="text" placeholder="Nome completo" data-testid="checkout-fullname" />
      <input type="text" placeholder="Email" data-testid="checkout-email" />
      <input type="text" placeholder="CPF" data-testid="checkout-cpf" />
      <input type="text" placeholder="Telefone" data-testid="checkout-phone" />
      <input type="text" placeholder="CEP" data-testid="checkout-cep" />
      <input type="text" placeholder="Endereço" data-testid="checkout-address" />
    </form>
  )

  render() {
    return (
      <div>
        {this.renderProductPlusValue()}
        {this.renderForm()}
        <button type="submit">Comprar</button>
      </div>
    );
  }
}

Checkout.propTypes = {
  onCart: PropTypes.arrayOf(PropTypes.object).isRequired,
  sumPrice: PropTypes.func.isRequired,
};

export default Checkout;
