import React from 'react';
import Lista from './Lista';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h2
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        <Lista />
      </div>
    );
  }
}

export default Home;
