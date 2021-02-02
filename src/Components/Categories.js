import React from 'react';

import * as api from '../services/api';
import Loading from './Loading';
import ProductList from './ProductList';
import SearchBar from './SearchBar';

class Categories extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      results: [],
      loading: false,
    };

    this.refreshState = this.refreshState.bind(this);
    this.loading = this.loading.bind(this);
    this.categorySelected = this.categorySelected.bind(this);
    this.setResults = this.setResults.bind(this);
  }

  componentDidMount() {
    api.getCategories().then((categories) => {
      this.setState({ categories, loading: false });
    });
  }

  setResults(termo) {
    this.setState({ loading: true });
    const categoryId = null;
    api.getProductsFromCategoryAndQuery(categoryId, termo)
      .then((r) => this.refreshState(r));
  }

  categorySelected(categoryID) {
    this.setState({ loading: true });
    api.getProductsFromCategoryAndQuery(categoryID, null)
      .then((r) => this.refreshState(r));
  }

  refreshState(resultado) {
    const { results } = resultado;
    this.setState({ results, loading: false });
  }

  loading() {
    const { loading } = this.state;
    if (loading) {
      return <Loading />;
    }
  }

  render() {
    const { categories, results } = this.state;

    return (
      <section className="sec-categories">
        <div className="categories-list main-container">
          <h3 className="special-text">Escolha uma Categoria</h3>
          <select onChange={ (e) => this.categorySelected(e.target.value) }>
            { categories.map((cat) => {
              const { id, name } = cat;
              return (
                <option
                  value={ id }
                  data-testid="category"
                  key={ id }
                >
                  { name }
                </option>);
            }) }
          </select>
          { this.loading() }
        </div>
        <div className="div-separator">
          <SearchBar className="categories-searchbar" onClick={ this.setResults } />
          <ProductList results={ results } />
        </div>
      </section>
    );
  }
}

export default Categories;
