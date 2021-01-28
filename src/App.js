import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <Route path="/" component={ Home } />
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
