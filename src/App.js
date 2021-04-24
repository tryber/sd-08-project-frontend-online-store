import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import ShoppingCart from './pages/ShoppingCart';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/ShoppingCart" component={ ShoppingCart } />
          <Route path="/" component={ Home } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
