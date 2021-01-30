import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cart from './components/Cart';
import Header from './components/Header';
import Footer from './components/Footer';
import Produtos from './components/Produtos';
import * as api from './services/api';
import ProdutoDetail from './components/ProdutoDetail';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      cart: 0,
      categorias: [],
      produtos: [],
      catID: '',
      search: '',
      // searchBtn: undefined,
    };
    this.alteraCategoriaBusca = this.alteraCategoriaBusca.bind(this);
    this.buscaInput = this.buscaInput.bind(this);
    this.submitBotao = this.submitBotao.bind(this);
  }

  componentDidMount() {
    this.buscarListaCategorias();
  }

  async getProdutos() {
    const { catID, search } = this.state;
    const prodData = await api.getProductsFromCategoryAndQuery(catID, search);
    const { results } = prodData;
    this.setState({
      produtos: results,
    });
  }

  async buscarListaCategorias() {
    const categorias = await api.getCategories();
    this.setState({
      categorias,
    });
  }

  async alteraCategoriaBusca(item) {
    const { search } = this.state;
    const idCategoria = item.id;
    if (search === undefined) {
      await this.setState({
        catID: idCategoria,
        search: '',
      });
      this.getProdutos();
    }
    await this.setState({
      catID: idCategoria,
    });
    this.getProdutos();
  }

  buscaInput(e) {
    const valor = e.target.value;
    this.setState({ search: valor });
  }

  async submitBotao(e) {
    const { search } = this.state;
    e.preventDefault();
    const prodData = await api.getProductsFromCategoryAndQuery('', search);
    console.log(prodData);
    const { results } = prodData;
    this.setState({
      produtos: results,
    });
  }

  render() {
    const { cart, categorias, produtos } = this.state;
    return (
      <BrowserRouter>
        <Header cart={ cart } />
        <main className="App">
          <Switch>
            <Route
              path="/"
              exact
              render={ () => (<Produtos
                produtos={ produtos }
                buscaInput={ this.buscaInput }
                submitBotao={ this.submitBotao }
                categorias={ categorias }
                funcCategoria={ this.alteraCategoriaBusca }
              />) }
            />
            <Route path="/cart" component={ Cart } />
            <Route
              path="/produto/:produtoId"
              render={ (props) => <ProdutoDetail { ...props } produtos={ produtos } /> }
            />
          </Switch>
        </main>
        <Footer />
      </BrowserRouter>
    );
  }
}
