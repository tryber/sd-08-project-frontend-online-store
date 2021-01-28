import React, { Component } from 'react';
import './App.css';
import * as api from './services/api';

class App extends Component {
  render() {
    const pneu = 'farol';
    const id = 'MLB5672';
    return (
      <>
        <p>{ api.getCategories().then((categories) => { console.log(categories); })}</p>
        <p>
          {api.getProductsFromCategoryAndQuery(pneu, id)
            .then((retorno) => console.log(retorno))}
        </p>
      </>
    );
  }
}

export default App;
