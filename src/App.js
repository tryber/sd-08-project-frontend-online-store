import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import * as api from './services/api';

import Search from './Components/Search';
import ShoppingCart from './Components/ShoppingCart';
import Categories from './Components/Categories';
import ProductDetails from './Components/ProductDetails';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    api.getCategories().then((categories) => {
      this.setState({ categories });
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <Router>
        <Link to="/shoppingcart" data-testid="shopping-cart-button">Carrinho</Link>
        <Categories categories={ categories } />
        <Switch>
          <Route exact path="/" component={ Search } />
          <Route exact path="/shoppingcart" component={ ShoppingCart } />
          <Route exact path="/:id/detalhes" component={ ProductDetails } />
        </Switch>
      </Router>
    );
  }
}

export default App;
