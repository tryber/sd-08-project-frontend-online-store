import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="busca" data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
          <input
            type="text"
            id="busca"
          />
        </label>
      </form>
    );
  }
}

export default Home;
