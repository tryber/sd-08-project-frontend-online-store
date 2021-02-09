import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './pages/Header';
import Cart from './pages/Cart';
import Hero from './components/Hero';
import Home from './pages/Home';
import Details from './pages/Details';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      productIdList: [],
    };

    this.getId = this.getId.bind(this);
    this.attProductIdList = this.attProductIdList.bind(this);
  }

  getId(event) {
    const { productIdList } = this.state;
    this.setState({
      productIdList: [...productIdList, event.target.id] });
  }

  attProductIdList(idList) {
    this.setState({
      productIdList: idList,
    });
  }

  render() {
    const { productIdList } = this.state;
    return (
      <main>
        <BrowserRouter>
          <Header />
          <Hero />
          <Switch>
            <Route
              exact
              path="/cart/"
              render={ (props) => (
                <Cart
                  { ...props }
                  productId={ productIdList }
                  attProductIdList={ this.attProductIdList }
                />) }
            />
            <Route
              exact
              path="/"
              render={ (props) => <Home { ...props } onClick={ this.getId } /> }
            />
            <Route
              path="/details/:id"
              render={ (props) => <Details { ...props } onClick={ this.getId } /> }
            />
          </Switch>
        </BrowserRouter>
      </main>
    );
  }
}

export default App;
