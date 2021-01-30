import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CartPage from './components/CartPage';
import './App.css';
import './services/api';
import TopNavBar from './components/TopNavBar';
import * as api from './services/api';
import MainPage from './components/MainPage';
import ProductDetails from './components/ProductDetails';

class App extends React.Component {
  constructor() {
    super();
    this.buscaDeProdutos = this.buscaDeProdutos.bind(this);
    this.addCart = this.addCart.bind(this);
    this.state = {
      categories: [],
      products: [],
      productsOnCart: [],
    };
  }

  componentDidMount() {
    api.getCategories().then((result) => {
      this.setState(() => ({ categories: result }));
    });
    // this.buscaDeProdutos(); -- Creio que não precisa mais desse, temos que fazer outra coisa
  }

  buscaDeProdutos(id) {
    api.getProductsFromCategoryAndQuery(id).then((result) => {
      this.setState(() => ({ products: result.results }));
    });
  }

  addCart(obj) {
    this.setState((old) => ({ productsOnCart: [...old.productsOnCart, obj] }));
  }

  render() {
    const { categories, products, productsOnCart } = this.state;

    return (
      <BrowserRouter>
        <TopNavBar cartSize={ productsOnCart.length } />
        <Switch>
          <Route
            path="/shoppingCart"
            render={ (props) => (<CartPage
              { ...props }
              productsOnCart={ productsOnCart }
            />) }
          />
          <Route
            path="/:id"
            render={ (props) => <ProductDetails { ...props } addCart={ this.addCart } /> }
          />
          <Route
            path="/"
            render={ (props) => (<MainPage
              { ...props }
              categories={ categories }
              products={ products }
              onclick={ this.buscaDeProdutos }
              addCart={ this.addCart }
            />) }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
