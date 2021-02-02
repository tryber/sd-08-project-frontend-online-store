import React from 'react';
import './App.css';

import ProductList from './shop/ProductList';
import SearchBar from './shop/SearchBar';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <ProductList />
    </div>
  );
}

export default App;
