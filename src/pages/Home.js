import React, { Component } from 'react';
import ButtonCart from '../components/ButtonCart';
import Header from '../components/Header';
import SearchPage from './SearchPage';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <ButtonCart />
        <SearchPage />
      </div>
    );
  }
}

export default Home;
