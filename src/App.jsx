import React from 'react';
import { Switch, BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import './App.css';

import Home from './pages/Home';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ Home } />

        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
}
