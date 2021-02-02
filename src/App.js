import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import PageShoppingCart from './pages/ShoppingCart';
import SpecsPage from './pages/SpecsPage';

function App() {
  return (

    <BrowserRouter>
      <Switch>
        <Route path="/pages/shoppingcart" component={ PageShoppingCart } />
        <Route
          path="/pages/specefication/:categoryID/:specID"
          render={ (props) => (<SpecsPage
            { ...props }
          />) }
        />
        <Route exact path="/" component={ SearchBar } />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
