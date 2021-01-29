import React, { Component } from 'react';
import Categories from '../components/Categories';
import Header from '../components/Header';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Categories />
      </div>
    );
  }
}

export default Home;
