import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <section>
        <input type="text" />
        <ul>
          <li data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </li>
        </ul>
      </section>
    );
  }
}

export default Home;
