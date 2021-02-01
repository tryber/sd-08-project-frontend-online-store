import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header
          className="App-header"
        />
        <BrowserRouter>
          <Switch>
            <Route path="/Cart" component={ Cart } />
            <Route path="/pages/productdetails/:id" component={ ProductDetails } />
            <Route exact path="/" component={ Home } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
