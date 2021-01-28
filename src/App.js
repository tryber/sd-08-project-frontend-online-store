import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import './App.css';

class App extends React.Component {
  initialMessage() {
    return (
      <h2
        data-testid="home-initial-message"
      >
        Digite algum termo de pesquisa ou escolha uma categoria.
      </h2>
    );
  }

  render() {
    return (
      <Router>
        <Route path="/" component={ Home } />
      </Router>
    );
  }
}

export default App;
