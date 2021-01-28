import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/" component={ Home } />
      </Router>
    );
  }
}

export default App;
