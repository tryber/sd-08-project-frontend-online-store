import React, { Component } from 'react';

import ShopButton from './ShopButton';
import CategoriesList from './CategoriesList';
import SearchBar from './SearchBar';

class Home extends Component {
  render() {
    return (
      <section>
        <SearchBar />
        <CategoriesList />
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
