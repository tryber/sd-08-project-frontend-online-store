import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cart from './components/Cart';
import Categorias from './components/Categorias';
import Header from './components/Header';
import Footer from './components/Footer';
import Produtos from './components/Produtos';
import * as api from './services/api';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      cart: 0,
      categorias: [],
      produtos: [],
      catID: '',
      search: '',
    };
    this.alteraCategoriaBusca = this.alteraCategoriaBusca.bind(this);
  }

  componentDidMount() {
    this.buscarListaCategorias();
  }

  componentDidUpdate() {
    this.getProdutos();
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

  alteraCategoriaBusca(e) {
    const nameId = e.target.name;
    this.setState({ catID: nameId });
  }

  render() {
    const { cart, categorias, produtos } = this.state;
    return (
      <BrowserRouter>
        <Header cart={ cart } />
        <main className="App">
          <Categorias
            categorias={ categorias }
            funcCategoria={ this.alteraCategoriaBusca }
          />
          <Switch>
            <Route
              path="/"
              exact
              render={ () => <Produtos produtos={ produtos } /> }
            />
            <Route path="/cart" component={ Cart } />
          </Switch>
        </main>
        <Footer />
      </BrowserRouter>
    );
  }
}
