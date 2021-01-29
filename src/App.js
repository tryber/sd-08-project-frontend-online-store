import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './components/Home';
import Category from './components/Category';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={ Home } />
    </BrowserRouter>
  );
}

export default App;
