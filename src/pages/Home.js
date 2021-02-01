import React from 'react';

import * as api from '../services/api';
import SearchBar from '../components/SearchBar';
import Categories from './Categories';

export default class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      categoriesList: [0],
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  async fetchCategories() {
    const allCategories = await api.getCategories();
    this.setState({
      categoriesList: allCategories,
    });
  }

  render() {
    const { categoriesList } = this.state;
    console.log(categoriesList.length);
    return (
      <main>
        <SearchBar />
        {categoriesList.length === 1
          ? <p>Carregando...</p>
          : <Categories categoriesList={ categoriesList } />}
      </main>
    );
  }
}
