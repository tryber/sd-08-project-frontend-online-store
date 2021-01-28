import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Search from './components/Search';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={ Search } />
    </BrowserRouter>
  );
}

export default App;
