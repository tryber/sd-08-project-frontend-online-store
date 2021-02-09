import React from 'react';
import PropTypes from 'prop-types';
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
      categoryID: '',
      loading: false,
    };

    this.categorySelected = this.categorySelected.bind(this);
    this.clearCat = this.clearCat.bind(this);
    this.loading = this.loading.bind(this);
    this.refreshState = this.refreshState.bind(this);
    this.setResults = this.setResults.bind(this);
  }

  componentDidMount() {
    api.getCategories().then((categories) => {
      this.setState({ categories, loading: false });
    });
  }

  setResults(termo) {
    const { categoryID } = this.state;
    this.setState({ loading: true });
    api.getProductsFromCategoryAndQuery(categoryID, termo)
      .then((r) => this.refreshState(r));
  }

  categorySelected(categoryID) {
    this.setState({ categoryID, loading: true });
    api.getProductsFromCategoryAndQuery(categoryID, '')
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

  clearCat() {
    this.setState({ categoryID: '' });
  }

  render() {
    const { categories, results } = this.state;
    const { onAddCart } = this.props;

    return (
      <section className="sec-categories">
        <div className="categories-list main-container">
          <h3 className="special-text">Escolha uma Categoria</h3>
          { this.loading() }
          <div className="buttons-div">
            { categories.map((cat) => {
              const { id, name } = cat;
              return (
                <div key={ id }>
                  <label htmlFor="category">
                    <button
                      className="categories-btn"
                      type="button"
                      data-testid="category"
                      onClick={ () => this.categorySelected(id) }
                    >
                      { name }
                    </button>
                  </label>
                </div>
              );
            }) }
            <div>
              <button
                className="categories-btn"
                type="button"
                onClick={ () => this.clearCat() }
              >
                Limpar Opções
              </button>
            </div>
          </div>
        </div>
        <div className="div-separator">
          <SearchBar className="categories-searchbar" onClick={ this.setResults } />
          <ProductList results={ results } onAddCart={ onAddCart } />
        </div>
      </section>
    );
  }
}

Categories.propTypes = {
  onAddCart: PropTypes.func.isRequired,
};

export default Categories;
