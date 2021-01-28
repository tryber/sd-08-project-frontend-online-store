import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <main className="App">
        <Route path="/" component={ Home } />
      </main>
    </Router>
  );
}

export default App;
