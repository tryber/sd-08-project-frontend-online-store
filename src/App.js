import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/cart" component={ Cart } />
          <Route path="/productDetails/:title" component={ ProductDetails } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
