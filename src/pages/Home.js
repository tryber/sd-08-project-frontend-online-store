import React from 'react';
import Categories from './Categories';
import * as api from '../services/api';

export default class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      categoriesList: [],
      loadingMessenge: true,
    };
    // this.fetchCategories = this.fetchCategories.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
  }

  async fetchCategories() {
    const objCategories = await api.getCategories();
    this.setState({
      categoriesList: [...objCategories],
      loadingMessenge: false,
    });
  }

  render() {
    const { loadingMessenge, categoriesList } = this.state;
    return (
      <main>
        <div className="search-bar-container">
          <section className="search-bar">
            <input type="text" placeholder="Pesquisa" />
          </section>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </div>
        {loadingMessenge
          ? <p>Loading...</p>
          : <Categories categoriesList={ categoriesList } />}
      </main>
    );
  }
}
