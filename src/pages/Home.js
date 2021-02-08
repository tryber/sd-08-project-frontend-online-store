import React from 'react';
import * as api from '../services/api';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Loading from '../components/Loading';

class Home extends React.Component {
  constructor() {
    super();

    this.onSelectedCategorie = this.onSelectedCategorie.bind(this);
    this.handleQuery = this.handleQuery.bind(this);
    this.onSearch = this.onSearch.bind(this);

    this.state = {
      query: '',
      loading: false,
      categoriesfull: [],
      selectedCategorie: '',
      queryResult: [],
      search: false,
    };
  }

  componentDidMount() {
    api.getCategories().then((categories) => {
      this.setState({
        categoriesfull: categories,
      });
    });
  }

  handleQuery(query) {
    this.setState({
      query,
    });
  }

  async onSearch() {
    const { selectedCategorie } = this.state;

    this.setState(
      { loading: true },
      async () => {
        const { query } = this.state;
        const queryResult = await
        api.getProductsFromCategoryAndQuery(selectedCategorie, query);
        this.setState({
          queryResult: queryResult.results,
          search: true,
          loading: false,
        });
      },
    );
  }

  onSelectedCategorie(event) {
    this.setState({
      selectedCategorie: event.target.id,
    }, () => this.onSearch(event));
  }

  render() {
    const { loading, search } = this.state;
    const { queryResult, categoriesfull } = this.state;
    if (loading) return <Loading />;
    return (
      <div>
        <Search
          queryResult={ queryResult }
          search={ search }
          handleQuery={ this.handleQuery }
          onSearch={ this.onSearch }
        />
        <Categories
          onSearch={ this.onSearch }
          categories={ categoriesfull }
          onSelectedCategorie={ this.onSelectedCategorie }
        />

      </div>
    );
  }
}

export default Home;
