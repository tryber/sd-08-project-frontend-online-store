import React from 'react';

import * as api from './services/api';

import Search from './Components/Search';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    api.getCategories().then((categories) => { console.log(categories); });
  }

  render() {
    return (
      <div>
        <Search />
      </div>
    );
  }
}

export default App;
