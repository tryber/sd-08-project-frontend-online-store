import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar';
import { getCategories, getProductsFromCategoryAndQuery } from './services/api';
function App() {
  return (
    <div className="App">
      <header className="App-header">  
        <h1>Frontend Online Store</h1> 
      </header>
      <SearchBar />
    </div>
  );
}

export default App;
