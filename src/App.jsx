import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as api from './services/api';

import './App.css';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // cartItems: [],
      categories: [],
      // productsList: [],
      // productsRating: [],
      // radioValue: '',
      // searchField: '',
      // isLoading: true,
    };
    this.getCategoriesList = this.getCategoriesList.bind(this);
  }

  componentDidMount() {
    this.getCategoriesList();
    // this.getLocalStorage();
  }

  async getCategoriesList() {
    const categoriesList = await api.getCategories();
    this.setState({
      categories: categoriesList,
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <div className="App">
        <h1>Front-End Online Store</h1>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={ (props) => <Home { ...props } categories={ categories } /> }
            />
            <Route
              path="/ShoppingCart"
              render={ (props) => <ShoppingCart { ...props } /> }
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
