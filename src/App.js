import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import SearchField from './components/SearchField';
import SearchResult from './components/SearchResult';

function App() {
  return (
    <div className="App">
      <SearchField />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ SearchResult } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
