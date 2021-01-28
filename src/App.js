import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as api from './services/api'

api.getCategories();
api.getProductsFromCategoryAndQuery('MLB1055', 'Motorola');

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ logo } className="App-logo" alt="logo" />
        <p>Edit src/App.js and save to reload.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React (Trybe)
        </a>
      </header>
    </div>
  );
}

export default App;
