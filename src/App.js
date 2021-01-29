import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import SearchField from './components/SearchField';
import SearchResult from './components/SearchResult';
import Categories from './pages/Categories';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SearchField />
        <Switch>
          <Route exact path="/" component={ SearchResult } />
        </Switch>
        <Categories />
      </BrowserRouter>
    </div>
  );
}

export default App;
