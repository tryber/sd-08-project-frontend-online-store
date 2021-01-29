import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import * as api from './services/api';
import ProductList from './pages/ProductList';
import ShoppingCart from './pages/ShoppingCart';

api.getCategories();
api.getProductsFromCategoryAndQuery('MLB1055', 'Motorola');

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ ProductList } />
          <Route exact path="/shoppingcart" component={ ShoppingCart } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
