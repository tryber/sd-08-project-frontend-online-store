import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import './styles/headerStyle.css';
import './styles/homeStyle.css';
import './styles/categoriesStyle.css';
import './styles/cardStyles.css';
import './styles/cardProductDetailsStyle.css';
import Home from './pages/Home';
import ShoppingCart from './pages/shoppingCart';
import CardProductsDetails from './pages/CardProductsDetails';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/shoppingcart" component={ ShoppingCart } />
          <Route exact path="/:id" component={ CardProductsDetails } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
