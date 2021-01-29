import React from 'react';
import Home from './components/Home';
import Search from './components/Search';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header
          className="App-header"
        />
        <Home />
        <Search />
      </div>
    );
  }
}

export default App;
