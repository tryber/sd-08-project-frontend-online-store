import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, ShoppingCart, DetailsProject } from './pages';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            path="/product/details/:id"
            render={ (props) => <DetailsProject { ...props } /> }
          />
          <Route path="/shoppingcart" component={ ShoppingCart } />
          <Route exact path="/" component={ Home } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
