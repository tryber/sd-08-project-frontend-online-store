import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ListaCategorias from '../../Components/ListaCategorias';
import BotaoCarrinho from '../../Components/BotaoCarrinho';
import ListaProdutos from '../../Components/ListaProdutos';
import SeletorOrdenar from '../../Components/SeletorOrdenar';

export default class PaginaInicial extends Component {
  renderStatusInput() {
    const { queryStatus, changeQueryStatus, fetchProducts } = this.props;
    return (
      <div className="buscar">
        <input
          type="text"
          id="buscador"
          value={ queryStatus }
          onChange={ changeQueryStatus }
          data-testid="query-input"
          placeholder="O que você está procurando?"
          className="inputBuscar"
        />
        <button
          type="button"
          data-testid="query-button"
          onClick={ fetchProducts }
          className="botaoBuscarProduto"
        >
          <img
            src="https://image.flaticon.com/icons/png/512/16/16492.png"
            alt="lupa buscar"
            className="lupa"
          />
        </button>
      </div>
    );
  }

  renderInitialMessage() {
    return (
      <div data-testid="home-initial-message" className="mensagemInicial">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </div>
    );
  }

  render() {
    const {
      products,
      queryStatus,
      categoryId,
      fetchProducts,
      changeCategoryId,
      addProductToCart,
      cartSize,
      orderFilter,
      handleOrder,
    } = this.props;
    return (
      <div>
        <div className="inputECarrinho">
          {this.renderStatusInput()}
          <BotaoCarrinho cartSize={ cartSize } />
        </div>
        <SeletorOrdenar orderFilter={ orderFilter } handleOrder={ handleOrder } />
        {(queryStatus === '' && categoryId === '') && this.renderInitialMessage()}
        <ListaCategorias onChangeCategoryId={ changeCategoryId } />
        <ListaProdutos
          products={ products }
          categoryId={ categoryId }
          onFetchProducts={ fetchProducts }
          addProductToCart={ addProductToCart }
          orderFilter={ orderFilter }
        />
      </div>
    );
  }
}

PaginaInicial.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  queryStatus: PropTypes.string.isRequired,
  categoryId: PropTypes.string.isRequired,
  fetchProducts: PropTypes.func.isRequired,
  changeQueryStatus: PropTypes.func.isRequired,
  changeCategoryId: PropTypes.func.isRequired,
  addProductToCart: PropTypes.func.isRequired,
  cartSize: PropTypes.number.isRequired,
  orderFilter: PropTypes.string.isRequired,
  handleOrder: PropTypes.func.isRequired,
};
