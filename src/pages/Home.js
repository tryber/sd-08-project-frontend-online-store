import React from 'react';

import * as api from '../services/api';
import SearchBar from '../components/SearchBar';

export default class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      categoriesList: [],
      search: "",
      searchResults: [],
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.onSubmit();
    this.fetchCategories();
  }

  async fetchCategories() {
    const list = await api.getCategories();
    this.setState({
      categoriesList: list,
    });
  }

  async onSubmit(event) {
    const search = event.value;
    console.log(search);
    const result = await api.getProductsSearch(search);
    console.log(result);
    this.setState({
      searchResults: result,
    })
  }

  render() {
    const { categoriesList, search, searchResults } = this.state;
    return (
      <main>
        <SearchBar />
        <button type"button"  data-testid="query-button" onClick={this.onSubmit}/>
        {typeof (categoriesList) !== 'undefined'
          && (
            <aside>
              {categoriesList
                .map((item) => (
                  <button type="button" key={ item.id } data-testid="category">
                    {item.name}
                  </button>
                ))}
            </aside>
          )}
        <Cardlist results= { searchResults } />
      </main>
    );
  }
}
