import React from 'react';
// import Categories from './Categories';
import * as api from '../services/api';
import SearchBar from '../components/SearchBar';

export default class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      categoriesList: [],
      loadingMessenge: true,
    };

    this.fetchCategories();
  }

  componentDidMount() {
    this.changeLoadingState();
  }

  async fetchCategories() {
    this.setState({
      categoriesList: await api.getCategories(),
    });
  }

  changeLoadingState() {
    this.setState({
      loadingMessenge: false,
    });
  }

  render() {
    const { categoriesList, loadingMessenge } = this.state;
    return (
      <main>
        <SearchBar />
        {loadingMessenge
          ? <p>Loading...</p>
          : (
            <aside className="categories-list">
              {categoriesList
                .map((item) => (
                  <div key={ item.id } data-testid="category">
                    {item.name}
                  </div>
                ))}
            </aside>
          )}
      </main>
    );
  }
}
