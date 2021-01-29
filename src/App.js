import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';

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
            <Route exact path="/" component={ Home } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
