import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import CategoryList from './components/CategoryList';
import SearchBar from './components/SearchBar';
// import * as api from './services/api';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={ SearchBar } />
          <Route path="/" component={ CategoryList } />
        </Switch>
      </Router>
    );
  }
}

export default App;
