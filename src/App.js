import React, { Component } from 'react';
import './App.css';
import * as api from './services/api';

class App extends Component {
  render() {
    return (
      <p>{ api.getCategories() }</p>
    );
  }
}

export default App;
