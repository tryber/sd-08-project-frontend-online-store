import React, { Component } from 'react';
import * as api from '../services/api';

import ShopButton from './ShopButton';
import CategoriesList from './CategoriesList';
import SearchBar from './SearchBar';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    api.getCategories()
      .then((data) => this.setState({
        categories: data,
      }));
  }

  render() {
    const { categories } = this.state;
    return (
      <section>
        <CategoriesList list={ categories } />
        <SearchBar />
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
