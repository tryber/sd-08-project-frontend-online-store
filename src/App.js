import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={ Home } />
      <Route />
    </BrowserRouter>
  );
}

export default App;
