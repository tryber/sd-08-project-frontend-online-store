import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../../services/api';

export default class Cart extends Component {
  componentDidMount() {
    this.buscaProduct();
  }

  async buscaProduct() {
    const { cartId, addCartProduct } = this.props;
    const newProduct = cartId.map(async (item) => {
      const product = await api.getProductById(item.id);
      addCartProduct(product);
    });
    return newProduct;
  }

  renderizaCarrinho() {
    const { cartId, cartProduct } = this.props;
    console.log(cartProduct);
    return (
      <table>
        <tbody>
          <tr>
            <th>Produto</th>
            <th>Quantidade</th>
            <th>Preço</th>
            <th>Total</th>
          </tr>
          {cartProduct.map((item, index) => (
            <tr key={ item.id }>
              <td>
                <span data-testid="shopping-cart-product-name">{ item.title }</span>
              </td>
              <td>
                <span data-testid="shopping-cart-product-quantity">
                  {cartId[index].qtd}
                </span>
              </td>
              <td>
                R$
                { item.price.toFixed(2).replace('.', ',') }
              </td>
              <td>
                R$
                { (item.price * cartId[index].qtd).toFixed(2).replace('.', ',') }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  renderizaVazio() {
    return (
      <span data-testid="shopping-cart-empty-message">Seu carrinho está vazio</span>
    );
  }

  render() {
    const { cartId, cartProduct, history } = this.props;
    return (
      <div>
        <button
          type="button"
          className="cart-goback"
          onClick={ history.goBack }
        >
          Voltar
        </button>
        {cartProduct.length >= 1
          ? this.renderizaCarrinho(cartId)
          : this.renderizaVazio()}

      </div>
    );
  }
}

Cart.propTypes = {
  cartId: PropTypes.arrayOf(PropTypes.object).isRequired,
  cartProduct: PropTypes.arrayOf(PropTypes.object).isRequired,
  history: PropTypes.shape({
    goBack: PropTypes.func,
  }).isRequired,
  addCartProduct: PropTypes.func.isRequired,
};
