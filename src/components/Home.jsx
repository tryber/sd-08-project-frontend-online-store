import React, { Component } from 'react';
import ShopButton from './ShopButton';
import MainList from './MainList';

class Home extends Component {
  render() {
    return (
      <section>
        <MainList />
        <ShopButton />
      </section>
    );
  }
}

export default Home;
