import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ShoppingCart from './pages/shoppingCart';

import './App.css';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path="/shopping-cart" component={ ShoppingCart } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
