import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import Listagem from './pages/listagem';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Listagem } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
