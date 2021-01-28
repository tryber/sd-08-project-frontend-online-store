import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import SearchBar from './components/SearchBar';

function App() {
  return (

    <BrowserRouter>
      <Route exact path="/" component={ SearchBar } />
    </BrowserRouter>

  );
}

export default App;
