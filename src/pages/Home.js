import React from 'react';
// import Categories from './Categories';
import * as api from '../services/api';
import SearchBar from '../components/SearchBar';

export default class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      categoriesList: [],
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  async fetchCategories() {
    this.setState({
      categoriesList: await api.getCategories(),
    });
  }

  render() {
    const { categoriesList } = this.state;
    return (
      <main>
        <SearchBar />
        {typeof (categoriesList) !== 'undefined'
          ? (
            <aside className="categories-list">
              {categoriesList
                .map((item) => (
                  <div key={ item.id } data-testid="category">
                    {item.name}
                  </div>
                ))}
            </aside>
          )
          : <p>Loading...</p>}
      </main>
    );
  }
}
