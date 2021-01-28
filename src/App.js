import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import * as api from './services/api';

import Search from './Components/Search';
import ShoppingCart from './Components/ShoppingCart';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    api.getCategories().then((categories) => { console.log(categories); });
  }

  render() {
    return (
      <Router>
        <Link to="/shoppingcart" data-testid="shopping-cart-button">Carrinho</Link>
        <Switch>
          <Route exact path="/" component={ Search } />
          <Route exact path="/shoppingcart" component={ ShoppingCart } />
        </Switch>
      </Router>
    );
  }
}

export default App;
