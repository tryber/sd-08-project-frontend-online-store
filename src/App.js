import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import * as api from './services/api';
import ProductList from './pages/ProductList';

api.getCategories();
api.getProductsFromCategoryAndQuery('MLB1055', 'Motorola');

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ ProductList } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
