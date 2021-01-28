import React, { Component } from 'react';
import ShopButton from './ShopButton';

class Home extends Component {
  render() {
    return (
      <section>
        <input type="text" />
        <ShopButton />
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
