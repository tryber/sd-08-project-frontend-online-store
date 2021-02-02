import React from 'react';
import Categories from '../Components/Categories';
import Header from '../Components/Header';

class Home extends React.Component {
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
