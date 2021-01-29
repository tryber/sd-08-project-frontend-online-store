import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

<<<<<<< HEAD
import Home from './pages/Home';
=======
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
>>>>>>> d526e9b411828c3e55ec368c686ea00cbac25218
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
<<<<<<< HEAD
=======
        <Route path="/shoppingCart" component={ ShoppingCart } />
>>>>>>> d526e9b411828c3e55ec368c686ea00cbac25218
      </Switch>
    </BrowserRouter>
  );
}

export default App;
