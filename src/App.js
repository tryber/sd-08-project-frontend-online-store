import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import FilterCategories from './components/FilterCategories';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <main className="App">
        <Route path="/" component={ Home } />
      </main>
      <FilterCategories />
    </Router>
  );
}

export default App;
