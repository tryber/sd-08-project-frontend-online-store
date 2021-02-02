import React, { Component } from 'react';
import Header from '../components/Header';
import SearchPage from './SearchPage';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <SearchPage />
      </div>
    );
  }
}

export default Home;
