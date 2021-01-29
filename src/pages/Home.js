import React from 'react';
import Categories from './Categories';
import * as api from '../services/api';
import SearchBar from '../components/SearchBar';

export default class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      categoriesList: [],
      loadingMessenge: true,
    };
  }

  componentDidMount() {
    api.getCategories().then((result) => this.setState({
      categoriesList: result,
      loadingMessenge: false,
    }));
  }

  render() {
    const { categoriesList, loadingMessenge } = this.state;
    return (
      <main>
        <SearchBar />
        {loadingMessenge
          ? <p>Loading...</p>
          : <Categories categoriesList={ categoriesList } />}
      </main>
    );
  }
}
