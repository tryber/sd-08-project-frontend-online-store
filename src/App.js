import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import Categories from './components/Categories';

function App() {
  return (
    <div className="App">
      <p>Time 26 - Req 2!</p>
      <BrowserRouter>
        <Route path="/" component={ ProductList } />
      </BrowserRouter>
      <Categories />
    </div>
  );
}

export default App;
