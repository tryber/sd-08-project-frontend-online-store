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

    this.changeLoadingState = this.changeLoadingState.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
  }

  async fetchCategories() {
    this.setState({
      categoriesList: await api.getCategories(),
      loadingMessenge: false,
    });
  }

  changeLoadingState() {
    this.setState({
      loadingMessenge: false,
    });
  }

  render() {
    const { categoriesList, loadingMessenge } = this.state;
    console.log(categoriesList);
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
                  </div>))}
            </aside>
          )}
      </main>
    );
  }
}
