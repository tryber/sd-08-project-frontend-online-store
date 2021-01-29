import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ShoppingCart from './components/ShoppingCart';
import './App.css';
import SearchBar from './components/SearchBar';
// import * as api from './services/api';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/shop-cart" component={ ShoppingCart } />
          <Route exact path="/" component={ SearchBar } />
        </Switch>
      </Router>
    );
  }
}

export default App;
