import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import CategoryList from './pages/CategoryProductsList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={ Home } />

          {/* <Route path="/:id" component={ ProductDetails } /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
