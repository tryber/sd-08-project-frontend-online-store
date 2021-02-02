import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, DetailsProduct, ShoppingCart } from './pages';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            path="/product/details/:id"
            render={ (props) => (
              <DetailsProduct { ...props } />
            ) }
          />
          <Route path="/shoppingcart" component={ ShoppingCart } />
          {/* <Route path="/product" component={ Product } /> */}
          <Route exact path="/" component={ Home } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
