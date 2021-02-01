import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, CarItems } from './pages';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/caritems" component={ CarItems } />
          <Route exact path="/" component={ Home } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
