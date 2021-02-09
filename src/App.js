import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import CartPage from './pages/CartPage';
import DetailsPage from './pages/Details';
import { getProductsFromCategoryAndQuery } from './services/api';

class App extends Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
      results: [],
      cart: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.addCart = this.addCart.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  handleClick(id) {
    const { searchText } = this.state;
    getProductsFromCategoryAndQuery(id, searchText)
      .then(({ results }) => this.setState({ results }));
  }

  addCart(id, title) {
    return this.setState(({ cart }) => ({
      cart: [
        ...cart,
        {
          id,
          title,
          quantity: 1,
        },
      ],
    }));
  }

  RenderHome() {
    const { results, cart, searchText } = this.state;
    return (
      <Route
        exact
        path="/"
        render={ (props) => (
          <Home
            { ...props }
            addCart={ this.addCart }
            handleClick={ this.handleClick }
            handleChange={ this.handleChange }
            results={ results }
            cart={ cart }
            searchText={ searchText }
          />
        ) }
      />
    );
  }

  RenderCartPage() {
    const { cart } = this.state;
    return (
      <Route
        path="/Cart"
        render={ (props) => (
          <CartPage
            { ...props }
            cart={ cart }
          />
        ) }
      />
    );
  }

  RenderDetailsPage() {
    const { cart } = this.state;
    return (
      <Route
        path="/details/:id"
        render={ (props) => (
          <DetailsPage
            { ...props }
            cart={ cart }
            addCart={ this.addCart }
          />
        ) }
      />
    );
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            { this.RenderCartPage() }
            { this.RenderDetailsPage() }
            { this.RenderHome() }
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
