import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import PaginaInicial from './Pages/PaginaInicial';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={ PaginaInicial } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
