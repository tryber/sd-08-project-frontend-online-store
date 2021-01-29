import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import CategoryMenu from './components/CategoryMenu';

function App() {
  return (

    <BrowserRouter>
      <Route exact path="/" component={ SearchBar } />
      <CategoryMenu />
    </BrowserRouter>

  );
}

export default App;
