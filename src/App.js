import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cart from './components/Cart';
import Categorias from './components/Categorias';
import Header from './components/Header';
import Footer from './components/Footer';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      cart: 0,
    };
  }

  render() {
    const { cart } = this.state;
    return (
      <BrowserRouter>
        <Header cart={ cart } />
        <main className="App">
          <Categorias />
          <Switch>
            <Route path="/cart" component={ Cart } />
          </Switch>
        </main>
        <Footer />
      </BrowserRouter>
    );
  }
}
