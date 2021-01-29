import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ProductsList from './pages/ProductsList';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={ ProductsList } exact />
      </Switch>
    </Router>
  );
}

export default App;
