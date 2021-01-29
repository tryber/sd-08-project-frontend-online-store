import React from 'react';
import MainPage from './pages/MainPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ShoppingCart from './pages/ShoppingCart';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={ MainPage } />
          <Route path="/ShoppingCart" component={ ShoppingCart } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
