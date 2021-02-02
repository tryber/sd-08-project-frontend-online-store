import React, { Component } from 'react';
import ListaCategorias from '../../Components/ListaCategorias';
import BotaoCarrinho from '../../Components/BotaoCarrinho';
import ListaProdutos from '../../Components/ListaProdutos';

export default class PaginaInicial extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
      inputStatus: '',
      categoryId: '',
      cartProducts: [],
    };

    this.fetchProducts = this.fetchProducts.bind(this);
    this.changeInputStatus = this.changeInputStatus.bind(this);
    this.changeCategoryId = this.changeCategoryId.bind(this);
    this.addProductToCart = this.addProductToCart.bind(this);
  }

  fetchProducts() {
    const { inputStatus, categoryId } = this.state;
    const { getProductsFromCategoryAndQuery } = api;

    getProductsFromCategoryAndQuery(categoryId, inputStatus)
      .then((data) => {
        this.setState({
          products: data.results,
        });
      });
  }

  changeCategoryId({ target }) {
    const { value } = target;
    this.setState({
      categoryId: value,
    });
  }

  changeInputStatus({ target }) {
    const { value } = target;
    this.setState({
      inputStatus: value,
    });
  }

  addProductToCart(product) {
    this.setState((prevState) => {
      if (prevState.cartProducts.length !== 0) {
        return { cartProducts: [...prevState.cartProducts, product] };
      }
      return { cartProducts: [product] };
    });
  }

  renderStatusInput() {
    const { inputStatus } = this.state;
    return (
      <div>
        <input
          type="text"
          id="buscador"
          value={ inputStatus }
          onChange={ this.changeInputStatus }
          data-testid="query-input"
        />
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.fetchProducts }
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
    const { products, inputStatus, categoryId } = this.state;
    return (
      <div>
        {this.renderStatusInput()}
        <ListaProdutos
          products={ products }
          // inputStatus={ inputStatus }
          categoryId={ categoryId }
          onFetchProducts={ this.fetchProducts }
          onAddProductToCart={ this.addProductToCart }
        />
        <BotaoCarrinho />
        {(inputStatus === '' && categoryId === '') && this.renderInitialMessage()}
        <ListaCategorias onChangeCategoryId={ this.changeCategoryId } />
      </div>
    );
  }
}
