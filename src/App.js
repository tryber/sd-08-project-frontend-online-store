import React from 'react';
import './App.css';
import Home from './components/Home';

class App extends React.Component {
  initialMessage() {
    return (
      <h2
        data-testid="home-initial-message"
      >
        Digite algum termo de pesquisa ou escolha uma categoria.
      </h2>
    );
  }

  render() {
    return (
      <div>
        { this.initialMessage() }
        <Home />
      </div>
    );
  }
}

export default App;
