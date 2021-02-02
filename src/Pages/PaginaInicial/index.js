import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ListaCategorias from '../../Components/ListaCategorias';
import BotaoCarrinho from '../../Components/BotaoCarrinho';
import ListaProdutos from '../../Components/ListaProdutos';

export default class PaginaInicial extends Component {
  renderStatusInput() {
    const { queryStatus, changeQueryStatus, fetchProducts } = this.props;
    return (
      <div>
        <input
          type="text"
          id="buscador"
          value={ queryStatus }
          onChange={ changeQueryStatus }
          data-testid="query-input"
        />
        <button
          type="button"
          data-testid="query-button"
          onClick={ fetchProducts }
        >
          BUSCAR
        </button>
      </div>
    );
  }

  renderInitialMessage() {
    return (
      <div data-testid="home-initial-message">
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
    } = this.props;
    return (
      <div>
        {this.renderStatusInput()}
        <ListaProdutos
          products={ products }
          categoryId={ categoryId }
          onFetchProducts={ fetchProducts }
          addProductToCart={ addProductToCart }
        />
        <BotaoCarrinho cartSize={ cartSize } />
        {(queryStatus === '' && categoryId === '') && this.renderInitialMessage()}
        <ListaCategorias onChangeCategoryId={ changeCategoryId } />
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

};
