import React from 'react';
import logo from './logo.svg';
import './App.css';
// import * as api from './services/api';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ logo } className="App-logo" alt="logo" />
        <p>Edit src/App.js and save to reload.</p>
        {/* {api.getCategories().then(categories => { console.log(categories) })} */}
      </header>
    </div>
  );
}

export default App;
