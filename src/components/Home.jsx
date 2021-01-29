import React, { Component } from 'react';
import ShopButton from './ShopButton';
import * as api from '../services/api';
import CategoriesList from './CategoriesList';

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
