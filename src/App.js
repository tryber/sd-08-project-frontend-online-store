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
    this.state = {
      categories: [],
      products: [],
    };
  }

  componentDidMount() {
    api.getCategories().then((result) => {
      this.setState(() => ({ categories: result }));
    });

    this.buscaDeProdutos('MLB5672');
  }

  buscaDeProdutos(id) {
    api.getProductsFromCategoryAndQuery(id).then((result) => {
      this.setState(() => ({ products: result.results }));
    });
  }

  render() {
    const { categories, products } = this.state;

    return (
      <BrowserRouter>
        <TopNavBar />
        <Switch>
          <Route path="/shoppingCart" component={ CartPage } />
          <Route path="/:id" render={ (props) => <ProductDetails { ...props } /> } />
          <Route
            path="/"
            render={ (props) => (<MainPage
              { ...props }
              categories={ categories }
              products={ products }
              onclick={ this.buscaDeProdutos }
            />) }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
