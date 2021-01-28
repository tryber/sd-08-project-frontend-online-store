import React from 'react';
import FetchCategories from './FetchCategories';
import Lista from './Lista';

class Home extends React.Component {
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
        <FetchCategories />
        <Lista />
      </div>
    );
  }
}

export default Home;
