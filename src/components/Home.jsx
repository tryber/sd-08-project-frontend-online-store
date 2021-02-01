import React, { Component } from 'react';

import ShopButton from './ShopButton';

import SearchBar from './SearchBar';

class Home extends Component {
  render() {
    return (
      <section>
        <SearchBar />
        <ShopButton />
      </section>
    );
  }
}

export default Home;
