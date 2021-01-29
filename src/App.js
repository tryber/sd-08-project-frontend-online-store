import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import ShoppingCart from './components/ShoppingCart';

class App extends React.Component {
  render() {
    return (
      <Router>
        <main>
          <Switch>
            <Route path="/shoppingcart" component={ ShoppingCart } />
            <Route exact path="/" component={ Home } />
          </Switch>
        </main>
      </Router>
    );
  }
}

export default App;
