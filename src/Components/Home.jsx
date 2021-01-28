import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div>
        <label data-testid="home-initial-message" htmlFor="input-search">
          <input type="text" id="input-search" />
          <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
        </label>
      </div>
    );
  }
}

export default Home;
