import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';

// import MapCategories from './components/MapCategories'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={ Home } />

          {/* <MapCategories /> */}

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
