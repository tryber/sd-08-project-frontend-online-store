import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import CartPage from './pages/CartPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/Cart" component={ CartPage } />
          <Route exact path="/" component={ Home } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
